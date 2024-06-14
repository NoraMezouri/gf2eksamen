const form = document.querySelector("#form")
const email = document.querySelector("#email")
const closeButton = document.querySelector("#closeButton")
const modal = document.querySelector("#dialog")
const modalText = document.querySelector("#modalText")

let errorString ="Indast en gyldig email adresse"
let succesString ="Du er ny tilmeldt nyhedsbrevet!"


const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
      )
  }


form.addEventListener("submit", function (event) {
    event.preventDefault()
    console.log("Hi!")

    if(validateEmail(email.value) == null ) {
        wrongEmail()
    }
    else{
    rightEmail()
    }
    
})

function wrongEmail(){
    modalText.innerHTML = errorString
    modal.showModal()

}
function rightEmail(){
    modalText.innerHTML = succesString
    modal.showModal()

}
closeButton.addEventListener('click', () => {
    modal.close()
})