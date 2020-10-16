'use strict';
(function(module) {
    module.exports = function(grunt) {
		var path = require('path');
        require('load-grunt-config')(grunt, {
			configPath: path.join(process.cwd(), 'grunt/config'),
			packageJsonPath: path.join(process.cwd(), 'package.json'),
			init: true,
			data: {
				test: false
			},
			
		});
    };
})(module); 
