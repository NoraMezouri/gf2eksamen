const form = document.querySelector("#form")
const email = document.querySelector("#email")
const closeButton = document.querySelector("#emailCloseModal")
const emailModal = document.querySelector("#emailModal")
const emailText = document.querySelector("#emailModalInner")

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
    

    if(validateEmail(email.value) == null ) {
        wrongEmail()
    }
    else{
    rightEmail()
    }
    
})

function wrongEmail(){
    emailText.innerHTML = errorString
    emailModal.showModal()

}
function rightEmail(){
    email.value.replace("<", "")
    emailText.innerHTML = succesString
    emailModal.showModal()

}
closeButton.addEventListener('click', () => {
    emailModal.close()
})