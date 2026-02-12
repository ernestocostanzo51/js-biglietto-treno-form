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

    const spesa_tot = kilometriValue * 0.21;
    const sconto_1= (spesa_tot * 20) / 100;
    const sconto_2=(spesa_tot * 40) / 100;
    let prezzo = ""
    if(ageValue === "Minorenne"){
        prezzo = spesa_tot - sconto_1


    }
    else if(ageValue === "Maggiorenne"){
        prezzo = spesa_tot - sconto_2

    }
    else{
        prezzo = spesa_tot

    }
    
    nomeEl.innerHTML = nomeValue
    carrozzaEl.innerHTML = numeroCarrozza
    codiceEl.innerHTML = cod
    prezzoEl.innerHTML = prezzo.toFixed(2)




    


    



    
})




