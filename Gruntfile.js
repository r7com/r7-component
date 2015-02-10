module.exports = function (grunt) {
  'use strict';

  // ## load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // ## get confis from package.json
  grunt.config('pkg', grunt.file.readJSON('package.json'));

  grunt.initConfig({
    // ### dist name
    bannerName: '/** ' + grunt.config('pkg').name + ' -v' + grunt.config('pkg').version +
              '\n* Copyright (c) '+ grunt.template.today('yyyy') + ' ' +
              grunt.config('pkg').author + '\n* Licensed ' +
              grunt.config('pkg').license + '\n*/\n\n',

    // ### jshint
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'Gruntfile.js',
        'src/**/*.js',
        'specs/**/*.js',
        'example/**/*.js'
      ]
    },

    // ### concat
    concat: {
      options: {
        banner: '<%= bannerName %>'
      },
      dist: {
        src: ['src/core/r7-component.js'],
        dest: 'dist/r7-component.js'
      }
    },

    // ### uglify
    uglify: {
      options: {
        banner: '<%= bannerName %>'
      },
      scripts: {
        files: {
          'dist/r7-component.min.js': ['dist/r7-component.js']
        }
      }
    },

    // ### watch
    watch: {
      scripts: {
        files: ['src/**/**.js'],
        tasks: ['concat']
      }
    }
  });

  grunt.registerTask('develop', ['concat', 'watch']);

  grunt.registerTask('test', ['jshint']);
};
