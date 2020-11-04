'use strict';

(function(module) {
	module.exports = function(grunt) {
		  return {main: {
				files: [
				  {src: 'js/om.receiver.js', dest: 'dist/tmp/om.receiver.js'},
				  {src: 'js/WasABI.js', dest: 'dist/tmp/WasABI.js'}
				],
			  }
		  }
	}
})(module)