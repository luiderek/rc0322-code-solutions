/* exported calculator */

var calculator = {
  add: function (x, y) {
    return x + y;
  },
  subtract: function (x, y) {
    return x - y;
  },
  multiply: function (x, y) {
    return x * y;
  },
  divide: function (x, y) {
    return x / y;
  },
  square: function (x) {
    return x * x;
  },
  sumAll: function (numArray) {
    let count = 0;
    for (const num of numArray) {
      count += num;
    }
    return count;
  },
  getAverage: function (numArray) {
    return this.sumAll(numArray) / numArray.length;
  }
};
