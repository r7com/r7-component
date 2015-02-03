(function(root) {
'use strict';
/**
 * Definicao da classe
 * @constructor components
 * @class
 */
var components = {},
/**
 * @name R7
 * @namespace
 */
R7 = {
/**
 * Comment of register
 *
 * @method components#register
 *
 * @param {string} name subdescription.
 * @param {function} fn subdescription.
 * @example
 *
 * R7.register('App',{});
 *
 * App.function.methods blah blah
 *
 */
    register: function(name, fn) {

      if (typeof R7[name] === 'undefined') {
        R7[name] = fn;
        return;
      }

      throw new Error('R7: Cannot register method ' + name + '. Method already exists.');
    },

/**
 * Comment of component
 *
 * @method components#component
 *
 * @param {string} name - subdescription.
 * @param {function} fn - subdescription.
 * @param {function} context - subdescription.
 * @return {function} subdescription.
 */
    component: function(name, fn, context) {

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
