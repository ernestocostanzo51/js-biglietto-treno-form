//dati di input del form
const nomeFieldEl = document.getElementById("nomeField")
const kilometriFieldEl = document.getElementById("kilometriField")
const ageFieldEl = document.getElementById("ageField")
const formEl = document.querySelector("form")



//dati di output che andranno a sostituire i vari valori nella tabella e che ci serviranno per calcolare il prezzo finale
const nomeEl = document.getElementById("name")
const carrozzaEl = document.getElementById("carrozza") // generato con un randomizer
const codiceEl = document.getElementById("codice") // generato con un randomizer

//dati che servono per trovare il prezzo finale del biglietto
const kilometriEl = document.getElementById("kilometri")
const ageEl = document.getElementById("age")

//prezzo finale
const prezzoEl = document.getElementById("prezzo")

//quello che succede quando clicchiamo(submit) il bottone del form
formEl.addEventListener('submit', function(e){
    e.preventDefault()

//creiamo delle variabili che racchiudono quello che abbiamo inserito nei campi dal form ovvero i "Value" di input
    const nomeValue = nomeFieldEl.value 
    const kilometriValue = kilometriFieldEl.value
    const ageValue = ageFieldEl.value

// generatori di numeri per la carrozza e il codice cp
    const numeroCarrozza = Math.floor(Math.random()* 9000)+1
    const cod = Math.floor(Math.random()* 9000)+1

//variabili che servono per il calcolo del prezzo
    const spesa_tot = kilometriValue * 0.21;
    const sconto_1= (spesa_tot * 20) / 100;
    const sconto_2=(spesa_tot * 40) / 100;
    let prezzo = ""
    //dipende da cosa abbiamo inserito all'interno del form succedono diverse cose
    if(ageValue === "Minorenne"){
        prezzo = spesa_tot - sconto_1


    }
    else if(ageValue === "Maggiorenne"){
        prezzo = spesa_tot - sconto_2

    }
    else{
        prezzo = spesa_tot

    }
    
    //sostituzione dei valori all'interno della tabella che si trova nella sezione BIGLIETTO GENERATO
    //prendiamo ogni id che rappresenta il campo e lo andiamo a sostituire con il "Value" inserito all'interno del Form
    nomeEl.innerHTML = nomeValue
    carrozzaEl.innerHTML = numeroCarrozza
    codiceEl.innerHTML = cod
    prezzoEl.innerHTML = prezzo.toFixed(2)




    


    



    
})




