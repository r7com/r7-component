  module.exports = function (grunt) {

  var tasks = [
    'grunt-contrib-jshint',
    'grunt-contrib-concat',
    'grunt-contrib-uglify',
    'grunt-contrib-watch',
    'grunt-contrib-jasmine',
    'grunt-jasmine-coverage'
  ];

  // ## get confis from package.json
  grunt.config('pkg', grunt.file.readJSON('package.json'));

  grunt.initConfig({
    // ### dist name
    banner_name: '/** ' + grunt.config("pkg").name + ' -v' + grunt.config("pkg").version + 
              '\n* Copyright (c) '+ grunt.template.today("yyyy") + ' ' + grunt.config('pkg').author +
              '\n* Licensed ' + grunt.config('pkg').license + '\n*/\n\n',

    // ### jshint
    jshint: {
      options: {
        jshintrc: true
      },
      all: [
        'Gruntfile.js',
        'src/**/*.js'
      ]
    },

    // ### concat
    concat: {
      options: {
        banner: '<%= banner_name %>'
      },
      dist: {
        src: [
          'src/core/r7-component.js',
        ],
        dest: 'dist/r7-component.js'
      }
    },

    // ### uglify
    uglify: {
      options: {
        banner: '<%= banner_name %>'
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
        files: [
          'src/**/**.js',
        ],
        tasks: ['concat']
      }
    },

    // ## jasmine
    jasmine: {
      src: [
        'src/**/*.js'
      ],

      options: {
        specs: [
          'specs/**/*.js'
        ],

        vendor: [
          // vendor comes here if necessary
        ]
      },

      coverage: {
        src: [
          'src/**/*.js'
        ],

        options: {
          specs: [
            'specs/**/*.js'
          ],
          template: require('grunt-template-jasmine-istanbul'),
          templateOptions: {
            coverage: 'coverage/coverage.json',
            report: 'coverage',
            thresholds: {
              lines: 75,
              statements: 75,
              branches: 75,
              functions: 90
            }
          }
        }
      }
    }

  });

  // ## load all tasks
  tasks.forEach(grunt.loadNpmTasks);

  grunt.registerTask('develop', [
    'concat',
    'watch'
  ]);

  grunt.registerTask('test', [
    'jshint',
    'jasmine'
  ]);


};
