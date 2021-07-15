var priceSlider = window.document.getElementById('price-slider')
var switchButton = window.document.getElementById('on')
var priceComponents = window.document.getElementsByClassName('price-value')
var timeComponents = window.document.getElementsByClassName('time')
var views = window.document.getElementById('views')

function pageViews(value) {
    switch(value) {
        case -2:
            views.innerText = "10k"
            break;
        case -1:
            views.innerHTML = '50k'
            break;
        case 0:
            views.innerHTML = '100k'
            break;
        case 1:
            views.innerHTML = '500k'
            break;
        case 2:
            views.innerHTML = '1m'
            break;
    }
}

// Change Values

function changeValue() {
    let initialValue = 16;  
    let multiplier = priceSlider.value > 0 ? 8 : 4 
    let yearOrMonth = switchButton.checked ? 9 : 1  
    let endValue = (initialValue + (priceSlider.value * multiplier)) * yearOrMonth 

    for(let i = 0; i < priceComponents.length; i++) {
        priceComponents[i].innerHTML = '$' + endValue.toFixed(2)
    }

    pageViews(parseInt(priceSlider.value))
}

// Change Time 

function chageTime(time) {
    for(let i = 0; i < timeComponents.length; i++) {
        timeComponents[i].innerHTML = time
    }
}

// Input Type Range

priceSlider.oninput = () =>  {
    changeValue()

    let complete = (priceSlider.value * 50 + 100) / 2

    priceSlider.style = 'background: linear-gradient(to right, rgb(165, 243, 235) 0%, rgb(165, 243, 235)' + complete + '%, rgb(234, 238, 251)' + complete + '%, rgb(234, 238, 251) 100%);'
}

// Slider Button

switchButton.onclick = () => {
    changeValue()

    if(switchButton.checked) {
        chageTime('year')
    }   
    else {
        chageTime('month')
    }
}