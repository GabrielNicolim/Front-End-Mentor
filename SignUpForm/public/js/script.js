const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const errors = {
    'firstName': 'First Name',
    'lastName': 'Last Name',
    'email': 'Email',
    'password': 'Password'
}

class Login {
    constructor() {
        this.firstName = undefined
        this.lastName = undefined
        this.email = undefined
        this.password = undefined
    }

    getValues() {
        // Trim() => Remove os espaços desnecessários do dado recebido
        this.firstName = window.document.getElementById('first-name')
        this.lastName = window.document.getElementById('last-name')
        this.email = window.document.getElementById('email')
        this.password = window.document.getElementById('password')
    
        this.validate()
    }

    validate() {
        let valid = true

        for (var i in this){
            let v = this[i].value.trim()
            
            if(v == undefined || v == '' || v == null) {
                this[i].classList.add('erro')
                this[i].placeholder = errors[i] + ' cannot be empty'
                valid = false
            }
            else {
                if(this[i].classList == 'erro') {
                    this[i].classList.remove('erro')
                    this[i].placeholder = errors[i]
                }
            }

            if(i == 'email') {
                if(!v.match(validRegex)) {
                    // Validação de email
                    this[i].classList.add('erro')
                    this[i].placeholder = 'Looks like this is not an email'
                    valid = false
                }
                else {
                    if(this[i].classList == 'erro') {
                        this[i].classList.remove('erro')
                        this[i].placeholder = errors[i]
                    }
                }
            } 
        }

        return valid
    }
}

function validUser() {
    // Feedback visual for valid user 
}

let login = new Login()

function formSubmit() {
    validUser(login.getValues())
}
