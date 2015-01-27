R7.component('Example', function (App) {
  'use strict';

  App.Models.ModelExample = Backbone.Model.extend({
    intialize: function () {
      console.log('init from model');
    }
  });

});

