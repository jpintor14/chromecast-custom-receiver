'use strict';
(function(module) {
    module.exports = function(grunt) {
        var optionsObj = {
                host: '<%= meta.server.HOST_NAME %>',
                username: '<%= meta.server.USER_NAME %>',
                password: '<%= meta.server.USER_PASS %>',
                readyTimeout: 99999
            }
        return {
            deploy: {
                options: optionsObj,
                files: [{
                    cwd: 'dist',
                    filter: 'isFile',
                    src: '**/*',
                    dest: '<%= meta.server.PATH %>' 
                }]
            }
        };
    };
})(module);