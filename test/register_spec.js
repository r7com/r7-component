var R7 = require('../src/core/r7-component.js');
var expect = require('chai').expect;

describe('R7#register', function() {
  it('should register anything in the global namespace', function() {
    var test = function () {};
    R7.register("Tester", test);
    expect(R7.Tester).to.equal(test);
  });

  it('should throw a exception when the name is already in use', function() {
    var test = function () {},
        name = 'Tester';

    try {
      R7.register(name, test);
    } catch (error) {
      expect(error.message).to.equal('R7: Cannot register method ' + name + '. Method already exists.');
    }
  });

});
