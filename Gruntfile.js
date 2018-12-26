module.exports = function ( grunt ) {
  grunt.loadNpmTasks( 'grunt-war' );

  var taskConfig = {
    war: {
      target: {
        options: {
          war_verbose: true,
          war_dist_folder: 'dist/war',           // Folder path seperator added at runtime.
          war_name: 'arrow-bootstrap-opt',            // .war will be appended if omitted
          webxml_welcome: 'index.html',
          webxml_display_name: 'arrow-bootstrap-opt'
        },
        files: [
          {
            expand: true,
            cwd: 'dist/arrow',
            src: ['**'],
            dest: ''
          }
        ]
      }
    }
  };

  grunt.initConfig( taskConfig );
};
