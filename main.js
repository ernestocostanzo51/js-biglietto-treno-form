const nomeFieldEl = document.getElementById("nomeField")
const kilometriFieldEl = document.getElementById("kilometriField")
const ageFieldEl = document.getElementById("ageField")
const formEl = document.querySelector("form")



const nomeEl = document.getElementById("name")
const carrozzaEl = document.getElementById("carrozza")
const codiceEl = document.getElementById("codice")
const prezzoEl = document.getElementById("prezzo")
const kilometriEl = document.getElementById("kilometri")
const ageEl = document.getElementById("age")


formEl.addEventListener('submit', function(e){
    e.preventDefault()


    const nomeValue = nomeFieldEl.value 
    const kilometriValue = kilometriFieldEl.value
    const ageValue = ageFieldEl.value
    
    nomeEl.innerHTML = nomeValue
    


    



    
})




