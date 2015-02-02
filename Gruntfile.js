  module.exports = function (grunt) {

  // ## load all grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'Gruntfile.js',
      ]
    },
  });

};
