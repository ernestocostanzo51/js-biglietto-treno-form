const nomeEl = document.getElementById("nome")
const kilometriEl = document.getElementById("kilometri")
const ageEl = document.getElementById("age")
const buttonEl = document.querySelector("button")

const formEl = document.querySelector("form")



formEl.addEventListener('submit', function(e){
    e.preventDefault()
    console.log(nomeEl.value)
    console.log(kilometriEl.value)
    console.log(ageEl.value)
})

console.log(nomeEl, nomeEl.value)
console.log(kilometriEl, kilometriEl.value)
console.log(ageEl, ageEl.value)