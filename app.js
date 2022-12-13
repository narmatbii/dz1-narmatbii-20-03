const nums = prompt('Введите цифры')

const input = document.querySelector('#num');
const button = document.querySelector('#submit')
const result = document.querySelector('#result')


const reqExp = /^\+7 \d{3} \d{3}-\d{2}-\d{2}$/gi

const numExp = /\w/g
console.log(numExp.test(nums));

button.addEventListener('click',() => {
    // console.log(reqExp.test(input.value));
    if (reqExp.test(input.value)) {
        result.innerText = 'Success';
        result.style.color = 'green'
    }else {
        result.innerText = 'Failed';
        result.style.color = 'red'
    }
})


const personalNum = document.querySelector('.personalNum')
const phoneSubmit = document.querySelector('.numSubmit')
const result2 = document.querySelector('#result2')
console.log(personalNum)

const regExp = /^[1-2]{1}\d{11}$/

phoneSubmit.addEventListener('click',() => {
    if (regExp.test(personalNum.value)){
        result2.innerText = 'Success'
        result2.style.color = 'green'
    }else{
        result2.innerText = 'Failed'
        result2.style.color = 'red'
    }
})



const dataNum = document.querySelector('.dataNum')
const dataSubmit = document.querySelector('.dataSubmit')
const result3 = document.querySelector('#result3')
console.log(dataNum)

const regExp2 = /(((0|1)[0-9]|2[0-9]|3[0-1])\-(0[1-9]|1[0-2])\-(\d{4}$))$/

dataSubmit.addEventListener('click',() => {
    if (regExp2.test(dataNum.value)){
        result3.innerText = 'Success'
        result3.style.color = 'green'
    }else{
        result3.innerText = 'Failed'
        result3.style.color = 'red'
    }
})