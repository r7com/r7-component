/*
 * Example of class
 */
R7.component('Example', function (App) {
  'use strict';

  /* 
   * here comes the defaults options values
   */
  var defaults = {
    myValue: 0
  };

  /* 
   * an example of definition of a Backbone class of your componenet
   */
  App.Views.Example = Backbone.Model.extend({
    intialize: function () {
      console.log('another init from model');
    }
  });

  /* 
   * your class constructor
   */
  function Example (options) {
    this.options = _.extend({}, defaults, options);
    this.prepare();
    this.bind();

    console.log('thats my App', App, this.options);
  };

  /* 
   * required method to prepare your instances
   */
  Example.prototype.prepare = function () {
    // prepare stuff
  };

  /* 
   * required method to bind any event
   */
  Example.prototype.bind = function () {
    // bind stuff
  };

  /* 
   * register you class into the global
   */
  R7.register('Example', Example);

});
