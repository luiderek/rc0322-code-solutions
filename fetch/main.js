const users = fetch('https://jsonplaceholder.typicode.com/users');
// users is a promise, with some state and value of {Response}

users
  .then(response => response.json())
  // then is a Promise prototype method that triggers on promise furfillment
  // and also returns other promises that may be chained.
  // has an optional second argument for onreject
  .then(
    data => {
      console.log(data);
    },
    error => {
      console.error(error);
    }
  );

// Just playing around with the optional init object.
// Honestly not entirely sure when I'd really need some of those options.
// Maybe credentials for CORS errors, and body for POST methods.
fetch('https://pokeapi.co/api/v2/pokemon/1', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });
