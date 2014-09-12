module.exports = function(grunt){
	// config
	grunt.initConfig({
		watch:{ 
			scripts:{
        files:['dev/*.html' , 'dev/**/**/*', '!dev/app/scss/*'],
        options: {
         	livereload: 1337
        }
      },
			sass:{
				files:['dev/app/scss/*.scss', 'dev/app/scss/components/*.scss'],
				tasks:['sass']
			}
		},
		connect: {
		  server: {
		    options: {
		    	port: 9002,
		    	base:'./dev',
		     	livereload: 1337
		    }
		  }
		},
	  sass: {
	      dist: {
	        files: {
	          'dev/app/css/style.css':'dev/app/scss/style.scss'
	        }
	      },
        options:{
          lineNumbers: true/*,
          style:'compressed'*/
        }
	  }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default',['connect','watch'] );
	grunt.registerTask('compile-sass',[ 'sass'] );

};
