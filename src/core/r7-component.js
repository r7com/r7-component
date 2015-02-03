;(function (root) {
  'use strict';

  var components = {},
  R7 = {
    register: function (name, fn) {

      if (typeof R7[name] === 'undefined') {
        R7[name] = fn;
        return;
      }

      throw new Error('R7: Cannot register method ' + name + '. Method already exists.');
    },

    component: function (name, fn, context) {

      if (!components[name]) {
        components[name] = {
          Models: {},
          Collections: {},
          Views: {},
          Routes: {},
          Templates: {}
        };
      }

      if (typeof fn === 'function') {
        fn.call(context, components[name]);
        return;
      }

      return components[name];
    }
  };

  R7.helpers = R7.helpers || {};
  root.R7 = R7;

} (window));
