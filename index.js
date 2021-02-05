let name = 'Yomi';  //what datatype is this- string
let age = 37;
let isCool = true;
const object = {
    class: 'SEI-111',
    company: 'GA'
}
const array = [1, 'hello', {name: 'john'}, true];

function add(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    if(typeof num1 === 'number' && typeof num1 === 'number'){
    return num1 * num2;
}else {
    throw Error('one or both inputs are NOT number')
    }
}

function substract(num1, num2){
    return num1 - num2;
}


module.exports = {
    name,
    age,
    isCool,
    object,
    add,
    array,
    substract,
    multiply
}