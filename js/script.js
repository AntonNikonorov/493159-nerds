var contactLink = document.querySelector(".contact-button");

var contactPopup = document.querySelector(".modal-contact");
var contactClose = contactPopup.querySelector(".modal-close");

var contactForm = contactPopup.querySelector(".contact-form");
var contactName = contactPopup.querySelector("[name=name]");
var contactMail = contactPopup.querySelector("[name=email]");
var contactMsg = contactPopup.querySelector("[name=message]");

var storageName = localStorage.getItem("contactName");
var storageMail = localStorage.getItem("contactMail");

contactLink.addEventListener("click", function(evt){
  evt.preventDefault();
  contactPopup.classList.add("modal-show");

  if (!storageName || !storageMail) {
    if (storageName) {
      contactName.value = storageName;
    }

    if (storageMail) {
      contactMail.value = storageMail;
    }

    if (!storageName) {
      contactName.focus();
    }
    else {
      contactMail.focus();
    }

  }
  else {
    contactName.value = storageName;
    contactMail.value = storageMail;
    contactMsg.focus();
  }
});

contactClose.addEventListener("click", function(evt){
  evt.preventDefault();  
  contactPopup.classList.remove("modal-show");
  contactPopup.classList.remove("modal-error");
  contactName.classList.remove("field-empty");
  contactMail.classList.remove("field-empty");
});

contactForm.addEventListener("submit", function(evt){

  if (!contactName.value || !contactMail.value || !contactMsg.value) {
    evt.preventDefault();
    contactPopup.classList.remove("modal-error");
    contactPopup.offsetWidth = contactPopup.offsetWidth;
    contactPopup.classList.add("modal-error");

    if (!contactName.value) {
      contactName.classList.add("field-empty");
    }

    if (!contactMail.value) {
      contactMail.classList.add("field-empty");
    }
  }
  else {
    localStorage.setItem("contactName", contactName.value);
    localStorage.setItem("contactMail", contactMail.value);
  }
});

window.addEventListener("keydown", function(evt){
  if (evt.code === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      contactPopup.classList.remove("modal-show");
      contactPopup.classList.remove("modal-error");
    }
    contactName.classList.remove("field-empty");
    contactMail.classList.remove("field-empty");
  }
});

var mapLink = document.querySelector(".map-button")
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close")

mapLink.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
  if (evt.code === 27) {
    if (contactPopup.classList.contains("modal-show")) {
      contactPopup.classList.remove("modal-show");
    }
  }
});