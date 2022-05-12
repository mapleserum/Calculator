let numbers = document.querySelectorAll('button.num');
let operators = document.querySelectorAll('button.op')
let current = document.querySelector('div.current');
let clear = document.querySelector('button.clear')
let equal = document.querySelector('button.equals')
let sum
let previousValue = ''
let currentValue = '';
let operate = ''

//buttons

numbers.forEach((button) => {
    button.addEventListener('click', () => {
        currentValue += button.value;
        document.getElementById('current').innerHTML = currentValue
        });
    });

clear.addEventListener('click', () => {
    currentValue = ''
    previousValue = ''
    document.getElementById('current').innerHTML = 0
    document.getElementById('previous').innerHTML = ''
    });

equal.addEventListener('click', () => {
    operator(operate, previousValue, currentValue)
    document.getElementById('previous').innerHTML = ''
    currentValue = sum
    document.getElementById('current').innerHTML = sum
    console.log(previousValue, currentValue, operate)
    previousValue = ''
    currentValue = sum
    operate = ''
}
)

operators.forEach((button) => {
    button.addEventListener('click', ()=> {
        currentValue = document.getElementById('current').innerHTML
        operate = button.value
        if (previousValue > 0 || previousValue < 0) {
            operator(operate, previousValue, currentValue)
            previousValue = document.getElementById('previous').innerHTML
        } else {
        previousValue = currentValue
        document.getElementById('previous').innerHTML = previousValue
        }
        console.log('previous value is ' + previousValue, 'current is ' + currentValue, operate)
        currentValue = ''
        document.getElementById('current').innerHTML = currentValue
        
    })
})

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