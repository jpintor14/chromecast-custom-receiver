'use strict';

(function(module) {
	module.exports = function(grunt) {
		  return {main: {
				 src: ['dist/tmp/WasABI.js', 'dist/tmp/om.receiver.js'],
				 dest: 'dist/tmp/receiver.concat.js'
			  }
		  }
	}
})(module)