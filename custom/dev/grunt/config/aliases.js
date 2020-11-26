'use strict';

(function(module) {
    module.exports = {
        'chromecast': ['clean:build', 'copy:main', 'concat:main', 'uglify', 'clean:tmp', 'scp:deploy']
    };
})(module);
