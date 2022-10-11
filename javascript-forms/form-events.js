function handleFocus(event) {
  console.log('focus event fired');
  console.log(' event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(' event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('value of name:', event.target.name, event.target.value);
}

var inputName = document.forms[0].elements.name;
var inputEmail = document.forms[0].elements.email;
var textArea = document.forms[0].elements.message;

inputName.addEventListener('focus', handleFocus);
inputEmail.addEventListener('focus', handleFocus);
textArea.addEventListener('focus', handleFocus);

inputName.addEventListener('blur', handleBlur);
inputEmail.addEventListener('blur', handleBlur);
textArea.addEventListener('blur', handleBlur);

inputName.addEventListener('input', handleInput);
inputEmail.addEventListener('input', handleInput);
textArea.addEventListener('input', handleInput);
