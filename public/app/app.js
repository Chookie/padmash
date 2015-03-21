(function () {

    var app = angular.module('app', ['ngResource','ngRoute']);

    app.config( function ($routeProvider, $locationProvider) {

        $locationProvider.html5Mode(true);
        // Tell angular that when directed to root, route to our main partial
        // app.js then gets this and returns the right page.
        $routeProvider
            .when('/',{ templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
        ;
    });

    // This will run after all of the above
    app.run( function( $rootScope, $location) {
        $rootScope.$on('$routeChangeError', function(eventt, current, previous, rejectionReason){
            // Reason from above
            if(rejectionReason === 'not authorised') {
                $location.path('/');
            }
        });
    });

}());