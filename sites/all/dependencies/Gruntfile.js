//'use strict';
module.exports = function(grunt) {
    // Load all tasks
    require('load-grunt-tasks')(grunt);
    // Show elapsed time
    require('time-grunt')(grunt);


    grunt.initConfig({
        less: {
            dev: {
                files: {
                    '../themes/jean/css/jean.css': [
                        '../themes/jean/less/main.less'
                    ]
                },

                options: {
                    ieCompat: true,
                    compress: false,
                    // LESS source map
                    // To enable, set sourceMap to true and update sourceMapRootpath based on your install
                    sourceMap: true,
                    sourceMapFilename: '../themes/jean/css/jean.css.map',
                    sourceMapRootpath: '/sites/all/themes/jean/css/'
                }
            },
            build: {
                files: {
                    '../themes/jean/css/jean.min.css': [
                        '../themes/jean/less/main.less'
                    ]
                },
                options: {
                    compress: false
                }
            }
        },
        bless: {
            css: {
                options: {
                    cacheBuster: false,
                    compress: false
                },
                files: {
                    '../themes/jean/css/jean-ie.css': '../themes/jean/css/jean-ie.css'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions', 'ie 8', 'ie 9', 'android 2.3', 'android 4', 'opera 12']
            },
            dev: {
                options: {
                    map: {
                        prev: '../themes/jean/css/'
                    }
                },
                src: '../themes/jean/css/jean.css'
            },
            build: {
                src: '../themes/jean/css/jean.min.css'
            }
        },
        watch: {
            less: {
                files: [
                    '../themes/jean/less/*.less',
                    '../themes/jean/less/*/*.less',
                    '../themes/jean/less/*/*/*.less'
                ],
                tasks: ['less:dev', 'bless', 'autoprefixer:dev']
            },
            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    '../themes/jean/css/jean.css',
                    '../themes/jean/css/jean-ie.css',
                    '../themes/jean/css/bootstrap-ie.css'
                ]
            }
        }
    });
    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bless');

    // Register tasks
    grunt.registerTask('default', [
        'dev'
    ]);
    grunt.registerTask('dev', [
        'less:dev',
        'autoprefixer:dev',
        'bless'
    ]);
    grunt.registerTask('build', [
        'less:build',
        'autoprefixer:build',
        'bless'
    ]);
};