let result = window.document.querySelectorAll('.result');

let percentageButtons = window.document.querySelectorAll('.grid .btn');

percentageButtons.forEach((element) => {
    element.addEventListener('click', () => {
        percentageButtons.forEach((element) => {
            element.classList.remove('activated')
        });

        element.classList.add('activated');

        if(element.id == 'custom') {
            percentageButtons[5].value = '';
            percentageButtons[5].type = 'number';
        }
        else {
            percentageButtons[5].type = 'button';
            percentageButtons[5].value = 'Custom';
        }

        calcResults();
    });
});

let billInput = window.document.querySelector('#bill')
let peopleInput = window.document.querySelector('#people');

let resetBtn = window.document.querySelector('#reset').addEventListener('click', () => {
    billInput.value = 0;
    peopleInput.value = 1;
    percentageButtons[0].dispatchEvent(new Event('click'));
});

billInput.addEventListener('input', () => {
    billInput.value = validateInput(billInput);

    if(billInput.value != '') {
        calcResults();
    }
});

peopleInput.addEventListener('input', () => {
    peopleInput.value = validateInput(peopleInput);

    if(peopleInput.value != '') {
        calcResults();
    }
});

percentageButtons[5].addEventListener('input', () => {
    if(percentageButtons[5].value > 100) {
        percentageButtons[5].value = 100;
    }
    else if(percentageButtons[5].value < 1) {
        percentageButtons[5].value = 1;
    }

    calcResults();
})

function validateInput(input) {
    if(input.value > 99999) {
        return 99999;
    }
    else if(input.value <= 0 && input.value != ''){
        return 1;
    }
    else {
        return input.value;
    }
}

function calcResults() {
    let value; 
    percentageButtons.forEach((element, index) => {
        if(element.classList.contains('activated')) {
            if(index != 5) {
                value = parseInt(element.innerHTML);
            }
            else {
                value = percentageButtons[5].value;
            }
        }
    });

    let tipAmount = ((billInput.value)/100 * value) / peopleInput.value;
    let total = billInput.value / peopleInput.value;

    result[0].innerHTML = '$' + tipAmount.toFixed(2);
    result[1].innerHTML = '$' + total.toFixed(2); 
}