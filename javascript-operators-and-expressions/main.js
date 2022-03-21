var width = 10;
var height = 5;
var area = width * height;

console.log('area:', area);
console.log('typeof area:', typeof area);

var bill = 80;
var payment = 100;
var change = payment - bill;
console.log('change:', change);
console.log('typeof change:', typeof change);

var quizzes = 80;
var midterm = 70;
var final = 50;
var grade = (quizzes + midterm + final) / 3;
console.log('grade:', grade);
console.log('typeof grade:', typeof grade);

var firstName = 'Derek';
var lastName = 'Lui';
var fullName = firstName + ' ' + lastName;
console.log('fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

var pH = 9;
var isAcidic = (pH < 7);
console.log('isAcidic:', isAcidic);
console.log('typeof isAcidic:', isAcidic);

var headCount = 234;
var isSparta = (headCount === 300);
console.log('isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

var motto = fullName;
motto += ' is the GOAT';
console.log('motto:', motto);
console.log('typeof motto:', typeof motto);
