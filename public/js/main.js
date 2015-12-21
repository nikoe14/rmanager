require.config({
    paths: {
        'backbone': '../node_modules/backbone/backbone',
        'underscore': '../node_modules/underscore/underscore',
        'jquery': '../node_modules/jquery/dist/jquery'
    },
    waitSeconds: 30
});

require(
  [
    'app/router'
  ],
  function(Router) {
        require(
            [],
            function() {
                'use strict';
                new Router();
            }
        );
    }
);
