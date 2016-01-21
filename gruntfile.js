module.exports = function(grunt){
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		imagemin:{
			dynamic:{
				files:[{
					expand:true,
					cwd:'app/img',
					src:['**/*.{png,jpg,gif}'],
					dest:'app/img/min'
				}]
			}
		},

		uglify:{
			options: {
				manage:false
			},
			my_target:{
				files:{
					'app/js/app.min.js': ['app/js/app.js'],
					'bower_components/angular/angular.min.js': ['bower_components/angular/angular.min.js']
				}
			}
		},

		cssmin: {
			my_target:{
				files: [{
					expand: true,
					cwd: 'app/css',
					src: ['*.css', '!*.min.css'],
					dest: 'app/css',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
};