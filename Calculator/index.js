var screen = document.querySelector('input');
var buttons = document.querySelectorAll('button');

var result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.textContent == 'AC') {
            result = '';
            screen.value = '';
        }

        else if(button.textContent == '=') {
            screen.value = eval(result).toFixed(4);
            result = screen.value;
        }
        else if(button.textContent == 'X') {
            result = result.slice(0, result.length-1);
            screen.value = result;
        }
        else {
            result += button.textContent;
            screen.value = result;
        }
    })
})
