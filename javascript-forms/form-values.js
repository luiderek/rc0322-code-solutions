function handleFocus(event) {
  console.log('focus event:', event.target.name);
}

function handleBlur(event) {
  console.log('blur event:', event.target.name);
}

function handleInput(event) {
  console.log('input event for', event.target.name);
  console.log(event.target.value);
}

const $forms = document.querySelectorAll('input,textarea');

for (const form of $forms) {
  form.addEventListener('focus', handleFocus);
  form.addEventListener('blur', handleBlur);
  form.addEventListener('input', handleInput);
}
