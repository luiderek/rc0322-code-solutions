function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('convertMinutesToSeconds(5):', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey, ' + name;
}

console.log("greet('Beavis'):", greet('Beavis'));

function getArea(width, height) {
  return width * height;
}

console.log('getArea(17,42):', getArea(17, 42));

const bobperson = {
  firstName: 'Bob',
  lastName: 'Smith'
};

function getFirstName(person) {
  return person.firstName;
}

console.log('bobperson:', bobperson);
console.log('getFirstName(bobperson):', getFirstName(bobperson));

const arr = [1, 2, 3, 4, 5, 'last'];

function getLastElement(array) {
  return array[array.length - 1];
}

console.log('arr:', arr);
console.log('getLastElement(arr):', getLastElement(arr));
