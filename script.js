/*Coded by Daniel Gingras on May 13th, 2022*/

/*Features to include:
Set fix decimal max
Delete/Backspace key
Keyboard compatibility
Maybe an ^x key
*/

let numbers = document.querySelectorAll('button.num');
let operators = document.querySelectorAll('button.op')
let current = document.querySelector('div.current');
let clear = document.querySelector('button.clear')
let equal = document.querySelector('button.equals')
let neg = document.querySelector('button.neg')
let back = document.querySelector('button.back')
let dec = document.querySelector('button.dec')
let sum
let previousValue = ''
let currentValue = '';
let operate = ''
let int = ''

//buttons

equal.addEventListener('click', () => {
    sum = ''
    if (currentValue === 0 || previousValue === '' || operate === '') {
        document.getElementById('previous').innerHTML = previousValue
        document.getElementById('current').innerHTML = currentValue
        return
    }
    operator(operate, previousValue, currentValue)
    document.getElementById('previous').innerHTML = ''
    currentValue = sum
    document.getElementById('current').innerHTML = currentValue
    previousValue = ''
    currentValue = ''
    operate = ''
}
)

operators.forEach((button) => {
    button.addEventListener('click', ()=> {
        if (previousValue > 0 || previousValue < 0) {
            operator(operate, previousValue, currentValue)
            previousValue = sum
            document.getElementById('previous').innerHTML = previousValue
        } else {
        previousValue = currentValue
        document.getElementById('previous').innerHTML = previousValue
        }
        currentValue = document.getElementById('current').innerHTML
        operate = button.value
        currentValue = ''
        document.getElementById('current').innerHTML = 0
        
    })
})

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        currentValue += button.value;
        document.getElementById('current').innerHTML = currentValue
    });
});

dec.addEventListener('click', () => {
    int = ''
    isInt(currentValue)
    if (int === true) {
    currentValue += '.';
    document.getElementById('current').innerHTML = currentValue
    } else {
    return
    }})

neg.addEventListener('click', () => {
    currentValue = (currentValue * -1)
    document.getElementById('current').innerHTML = currentValue
}
)

clear.addEventListener('click', () => {
    currentValue = ''
    previousValue = ''
    document.getElementById('current').innerHTML = 0
    document.getElementById('previous').innerHTML = previousValue
    });

// functions

function isInt(no1) {
    int = no1 % 1 === 0;
    return int
}


function add(no1, no2){
    sum = +no1 + +no2
    document.getElementById('previous').innerHTML = sum
}

function sub(no1, no2){
    sum = +no1 - +no2
    document.getElementById('previous').innerHTML = sum
}

function mult(no1, no2){
    sum = +no1 * +no2
    document.getElementById('previous').innerHTML = sum
}

function div(no1, no2) {
    if (no2 === '') {
        sum = 0
    } else {
    sum = (+no1 / +no2)
    }
    document.getElementById('previous').innerHTML =  sum
}

function operator(op, no1, no2){
    if (op === '+') {
        return add(no1, no2)
    } else if (op === '-') {
        return sub(no1, no2)
    } else if (op === '*') {
        return mult(no1, no2)
    } else if (op === '/') {
        return div(no1, no2)
    } else {
        return 'error'
    }
}