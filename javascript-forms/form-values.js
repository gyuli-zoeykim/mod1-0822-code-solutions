var contact = document.forms[0];

contact.addEventListener('submit', function (event) {
  event.preventDefault();
  var formValue = {};
  formValue.name = contact.elements.name.value;
  formValue.email = contact.elements.email.value;
  formValue.message = contact.elements.message.value;
  console.log(formValue);
  contact.reset();
});
