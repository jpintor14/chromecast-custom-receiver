'use strict';

(function(module) {
    module.exports = function(grunt) {
        var uglifyFiles = [
            {
                src: 'dist/tmp/receiver.concat.js',
                dest: 'dist/js/om.receiver.min.js'
            }
        ];
        return {
            options: {
                mangle: {
					toplevel: true
				},
                preserveComments: false
            },
            js: {
                files: uglifyFiles
            }
        };
    };
})(module);
