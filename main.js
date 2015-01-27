;(function (root) {
  'use strict';

  var components = {};

  var R7 = {
    register: function (name, fn) {
      if ('undefined' === typeof R7[name]) {
        R7[name] = fn;
        return;
      }

      throw new Error('R7: Cannot register method ' + name + '. Method already exists.');
    },

    component: function () {

      return function (name, fn, context) {

        if (!components[name]) {
          components[name] = {
            Models: {},
            Collections: {},
            Views: {},
            Routes: {},
            Templates: {}
          };
        }

        if ('function' === typeof fn) {
          fn.call(context, components[name]);
          return;
        }

        return components[name];
      };

    }()
  };

  R7.helpers = R7.helpers || {};
  root.R7 = R7;

} (window));

