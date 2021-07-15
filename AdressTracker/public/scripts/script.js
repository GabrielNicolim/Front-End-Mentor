const validRegIPv4 = /^[0-9]{1,3}(\.[0-9]{1,3}){3}$/;
const validRegIPv6 = /^[0-9a-fA-F:]+$/;
const apiKey = 'at_A0lvgKf06y3byvbLj9CPOUtn20IWI'

const inputIp = window.document.getElementById('input')
class Map {
    constructor() {
        this.ip 
        this.location
        this.timezone 
        this.isp 

        this.lat 
        this.lgn 

        this.ipView = window.document.getElementById('ip')
        this.locationView = window.document.getElementById('location')
        this.timeView = window.document.getElementById('time')
        this.ispView = window.document.getElementById('isp')
    }

    setMap(ip, location, timezone, isp, lat, lgn) {
        this.ip = ip
        this.location= location
        this.timezone = timezone
        this.isp = isp

        this.lat = parseFloat(lat)
        this.lgn = parseFloat(lgn)
    }

    showMap() {
        mapView(this.lat, this.lgn)

        this.ipView.innerText = this.ip
        this.locationView.innerText = this.location
        this.timeView.innerText = this.timezone
        this.ispView.innerText = this.isp
    }
}

var mapObj = new Map()

function getIp() {
    return inputIp.value.trim()
}

function validIp() {
    return validRegIPv4.test(getIp()) || validRegIPv6.test(getIp());
} 

async function getInfo() {
    return await $.get(`https://geo.ipify.org/api/v1?apiKey=${apiKey}&ipAddress=${getIp()}`);
}

async function submit() {
    if(validIp()) {
        try {
            var response = await getInfo()
        } catch (error) { 
            console.log(error);
            alert(error.responseJSON.messages);
            return;
        }

        mapObj.setMap(response.ip, 
        response.location.city + ', ' + response.location.country + ' ' + response.location.postalCode,
        'UTC ' + response.location.timezone,
        response.isp,
        response.location.lat,  
        response.location.lng)

        mapObj.showMap()
    }

    inputIp.value = ''
}