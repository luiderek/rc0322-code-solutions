/* exported student */

var student = {
  firstName: 'derek',
  lastName: 'lui',
  subject: 'breathing',
  getFullName() {
    return this.firstName + ' ' + this.lastName;
  },
  getIntroduction() {
    return `Hello, my name is ${this.getFullName()} and I am studying ${this.subject}.`;
  }
};
