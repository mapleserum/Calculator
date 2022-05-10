function add(no1, no2){
    sum = no1 + no2
    return sum
}

function sub(no1, no2){
    sum = no1 - no2
    return sum
}

function mult(no1, no2){
    sum = no1 * no2
    return sum
}

function div(no1, no2) {
    sum = no1 / no2
    return sum
}

function operator(op, no1, no2){
    if (op === '+') {
        add(no1, no2)
    } else if (op === '-') {
        sub(no1, no2)
    } else if (op === '*') {
        mult(no1, no2)
    } else if (op === '/') {
        div(no1, no2)
    } else {
        return 'error'
    }
}