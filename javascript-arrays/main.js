var colors = ['red', 'white', 'blue'];

console.log('colors[0]:', colors[0]);
console.log('colors[1]:', colors[1]);
console.log('colors[2]:', colors[2]);

var usaColor = 'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log('usaColor:', usaColor);

colors[2] = 'green';
var mexColor = 'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log('mexColor:', mexColor);

var students = ['amy', 'bob', 'catherine', 'david'];

var numberOfStudents = students.length;
console.log('there are', numberOfStudents, 'students in the class');

var lastIndex = numberOfStudents - 1;
var lastStudent = students[lastIndex];
console.log('the last student in the array is', lastStudent);

console.log('students:', students);
