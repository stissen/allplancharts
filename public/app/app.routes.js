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
		
		// show all slideshows
		.when('/slideshows', {
			templateUrl: 'app/views/pages/slideshows/all.html',
			controller: 'slideshowController',
			controllerAs: 'slideshow'
		})
		
		// page to view a slideshow
		.when('/slideshows/:slideshowId', {
			templateUrl: 'app/views/pages/slideshows/single.html',
			controller: 'slideshowViewController',
			controllerAs: 'slideshow'
		})
		
		// page to view a slideshow
		.when('/slideshows/:slideshowId/run/:duration', {
			templateUrl: 'app/views/pages/slideshows/run.html',
			controller: 'slideshowRunController',
			controllerAs: 'slideshow'
		})
		
		// show one slide
		.when('/slides/:slideId', {
			templateUrl: 'app/views/pages/slides/slide.html',
			controller: 'slideViewController',
			controllerAs: 'slide'
		})
	
	
		
		
	$locationProvider.html5Mode(true);

});
