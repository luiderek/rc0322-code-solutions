const $form = document.querySelector('form');

$form.addEventListener('submit', function (event) {
  event.preventDefault();
  const formdata = {
    name: $form.elements.name.value,
    email: $form.elements.email.value,
    message: $form.elements.message.value
  };
  console.log(formdata);
  $form.reset();
});
