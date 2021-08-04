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
    });
});