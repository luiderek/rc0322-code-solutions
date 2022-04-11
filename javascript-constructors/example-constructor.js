function ExampleConstructor() { }

console.log('ExampleConstructor.prototype:', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype:', typeof ExampleConstructor.prototype);

var exampleObject = new ExampleConstructor();
console.log('exampleObject:', exampleObject);
console.log('typeof exampleObject:', typeof exampleObject);
console.log('exampleObject instanceof ExampleConstructor:', exampleObject instanceof ExampleConstructor);
