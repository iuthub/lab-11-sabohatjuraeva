window.onload=function () {
    let calculator = document.querySelector('.calculator');
    let keys = calculator.querySelector('.calculator__keys');
    const display = document.querySelector('.calculator__display');
    keys.addEventListener('click', e => {
        if (e.target.matches('button')) {
            const key = e.target;
            const action = key.dataset.action;
            const keyContent = key.textContent;
            const displayedNum = display.textContent;

            if (!action) {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if (action === 'add') {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if (action === 'subtract') {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if (action === 'multiply') {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if (action === 'divide') {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if (action === 'decimal') {
                function inputDecimal(dot) {
                    if (!display.textContent.includes(dot)) {
                        display.textContent += dot;
                    }
                }
                inputDecimal(key.value);
            }
            if (action === 'clear') {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }
            if (action === 'calculate') {
                if (displayedNum === '0') {
                    display.textContent = keyContent
                } else {
                    display.textContent = displayedNum + keyContent
                }
            }

        }
    })
};