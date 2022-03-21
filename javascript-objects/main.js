var student = {
  firstName: 'Derek',
  lastName: 'Lui',
  age: 25
};

var fullName = student.firstName + ' ' + student.lastName;
console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'tightrope walker';

console.log('livesInIrvine:', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Buggy',
  model: 'Zoomer',
  year: 2043
};

vehicle['color'] = 'green';
vehicle['isConvertible'] = true;

console.log('color:', vehicle['color']);
console.log('isConvertible:', vehicle['isConvertible']);

console.log('vehicle:', vehicle);

var pet = {
  name: 'Goji',
  type: 'dog'
};

delete pet.name;
delete pet.type;

console.log('pet:', pet);
