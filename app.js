'use strict';
const form           = document.getElementById('emailForm');
const newsLetterSign = document.querySelector('.sign-letter');
const modalSuscribe  = document.querySelector('.suscribe');
const inputEmail     = document.querySelector('.input-email');
const btnSumbit      = document.querySelector('.btn-submit');
const btmDimiss      = document.querySelector('.btn-dimiss');
const emailDirection = document.querySelector('.email-direction');
///////////////////////////////////////////////////////////////////////////
let isValid = false;

function validityForm () {
  const emailValue = inputEmail.value;

  isValid = form.checkValidity();
  if(!isValid) return;


  if(isValid) {
    newsLetterSign.classList.add('hidden');
    modalSuscribe.classList.remove('hidden'); 
    emailDirection.textContent = emailValue;
  }
}

function processForm (e) {
e.preventDefault();
validityForm();
};

form.addEventListener('submit', processForm);
// The [submit event fires] on the <form> 
// AND NOT on any <button> or <input>

 
btmDimiss.addEventListener('click', function() {
  newsLetterSign.classList.remove('hidden');
  modalSuscribe.classList.add('hidden'); 

  emailDirection.textContent = '';
  inputEmail.value = '';
})