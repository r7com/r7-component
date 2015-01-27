R7.component('Example', function (App) {
  'use strict';

  App.Models.ModelExample = Backbone.Model.extend({
    defaults: {
      name: 'example'
    },

    initialize: function () {
      console.log('init from model');
    }
  });

});

