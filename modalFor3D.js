//Variabler der refererer til DOM elementer 
//"#" betyder at elementerne vælges via deres ID attribut
const modalElement = document.querySelector("#modal")
const modalInner = document.querySelector("#modalInner")


//Deklaration af modal funktionen linkElement referer til
//til this = elementet selv, der blev sat som parameter, da
//funktionen blev kaldt i onclick attributten i HTML koden 
function modal(linkElement){

    //Vi gemmer linkets href værdi i en midlertidig variabel
    let link = linkElement.getAttribute("href")

    //Vi kopierer link-destinationens inhold over i en midlertidig variabel
    let modalContent = document.querySelector(link).innerHTML

    //Vi sætter indholdet ind i modal vinduet
    modalInner.innerHTML = modalContent
    //Vi fjerner den "usynlige" CSS klasse
    modalElement.showModal()
}


//Deklaration af funktion der lukker modal vinduet
function closeModal (){

    //Fjern evt. indhold
    modalInner.innerHTML = ""
    //Vi tilføjer den "usynlige" CSS klasse igen
    modalElement.close()
}