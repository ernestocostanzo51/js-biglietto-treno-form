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

    const numeroCarrozza = Math.floor(Math.random()* 9000)+1
    const cod = Math.floor(Math.random()* 9000)+1
    
    nomeEl.innerHTML = nomeValue
    carrozzaEl.innerHTML = numeroCarrozza
    codiceEl.innerHTML = cod
    


    



    
})




