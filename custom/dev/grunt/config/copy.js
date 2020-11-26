'use strict';

(function(module) {
	module.exports = function(grunt) {
		  return {main: {
				files: [
				  {src: 'index.html', dest: 'dist/index.html'},
				  {src: 'js/lang.js', dest: 'dist/js/lang.js'},
				  {src: 'js/media_player.js', dest: 'dist/js/media_player.js'},
				  {src: 'js/reciver2.5.8.js', dest: 'dist/js/reciver2.5.8.js'},
				  {src: 'js/om.receiver.js', dest: 'dist/tmp/om.receiver.js'},
				  {src: 'js/WasABI.js', dest: 'dist/tmp/WasABI.js'}
				],
			  }
		  }
	}
})(module)