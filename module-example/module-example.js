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
  App.Views.Example = Backbone.View.extend({
    initialize: function () {
      console.log('init from my view');
    }
  });

  /* 
   * your class constructor
   */
  function Example (options) {
    this.options = _.extend({}, defaults, options);
    this.prepare();
    this.bind();
    this.start();

    console.log(App, this.options, this.view);
  };

  /* 
   * required method to prepare your instances
   */
  Example.prototype.prepare = function () {
    // prepare stuff
    this.view = new App.Views.Example();
  };

  /* 
   * required method to bind any event
   */
  Example.prototype.bind = function () {
    // bind stuff
  };

  /* 
   * required method to start class
   */
  Example.prototype.start = function () {
    // start stuff
  };

  /* 
   * register you class into the global
   */
  R7.register('Example', Example);

});
