/* globals describe, it */
var R7 = require('../main.js');
var expect = require('chai').expect;

describe('R7#component', function() {
  it('should be defined', function() {
    expect(R7).to.be.defined;
    expect(R7.component).to.be.defined;
  });

  it('should register a component with some defaults attrs', function() {
    var comp = R7.component('Tester');
    expect(comp.Models).to.be.defined;
    expect(comp.Collections).to.be.defined;
    expect(comp.Views).to.be.defined;
    expect(comp.Templates).to.be.defined;
    expect(comp.Routes).to.be.defined;
  });

  it('should receive a callback as argument and insert the component as firt argument for callback', function() {
    var comp = R7.component('Tester');
    R7.component('Tester', function (App) {
      expect(comp).to.equal(App);
    });
  });

  it('should allow to pass the callback context as a argument', function() {
    var cb = function (App) {
      expect(this).to.equal(self);
    };

    var self = this;
    R7.component('Tester', cb, self);
  });

  it('should set the callback context with the component when no context is given', function() {
    var cb = function (App) {
      expect(this).to.equal(App);
    };

    R7.component('Tester', cb);
  });
});
