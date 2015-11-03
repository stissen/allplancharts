angular.module('app.routes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'app/views/pages/home.html'
		})
		
		// login page
		.when('/login', {
			templateUrl : 'app/views/pages/login.html',
   			controller  : 'mainController',
    			controllerAs: 'login'
		})
		
		// show all users
		.when('/users', {
			templateUrl: 'app/views/pages/users/all.html',
			controller: 'userController',
			controllerAs: 'user'
		})

		// form to create a new user
		// same view as edit page
		.when('/users/create', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userCreateController',
			controllerAs: 'user'
		})

		// page to edit a user
		.when('/users/:user_id', {
			templateUrl: 'app/views/pages/users/single.html',
			controller: 'userEditController',
			controllerAs: 'user'
		})
		
		.when('/slides/create', {
			templateUrl: 'app/views/pages/slides/create.html',
			controller: 'slideCreateController',
			controllerAs: 'slide'
		})
	
		
		// show one slide
		.when('/slides/:slideId', {
			templateUrl: 'app/views/pages/slides/slide.html',
			controller: 'slideViewController',
			controllerAs: 'slide'
		})
		
		// show all slides
		.when('/slides', {
			templateUrl: 'app/views/pages/slides/all.html',
			controller: 'slideController',
			controllerAs: 'slide'
		})
		
	$locationProvider.html5Mode(true);

});
