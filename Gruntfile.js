module.exports = function(grunt){

	grunt.initConfig({

		// concat: {
		// 	js: {
		// 		src: ['js/1.js', 'js/2.js'],
		// 		dest: 'build/js/scripts.js',
		// 	}
		// },

		jshint: {
			all: ['Gruntfile.js', 'js/*.js']
		},

		watch: {
			js: {
				files: ['js/**/*.js'],
				tasks: ['jshint'],
			},
		},

		validation: {
			files: {
    			src: ['spa.html', 'layout.html']
    		}
		},

		// uglify: {
		// 	js: {
		// 		files: {
		// 			'build/js/scripts.min.js': ['build/js/scripts.js']
		// 		}
		// 	}
		// }
	});

	//grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-html-validation');
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['watch']);

};