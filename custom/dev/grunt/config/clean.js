'use strict';

(function(module) {
    module.exports = function(grunt) {
        return {
            build: [
                'dist/tmp'
            ],
            tmp: ['dist/tmp/om.receiver.js',
				'dist/tmp/WasABI.js']
                //'dist/tmp/receiver.concat.js']
        };
    };
})(module);
