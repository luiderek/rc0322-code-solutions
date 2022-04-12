const $users = document.querySelector('#user-list');

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', function () {
  console.log('xhr.status:', xhr.status);
  console.log('xhr.response:', xhr.response);
  for (const user of xhr.response) {
    const $liName = document.createElement('li');
    $liName.textContent = user.name;
    $users.appendChild($liName);
  }
});

xhr.send();
