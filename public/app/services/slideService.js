angular.module('slideService', [])

.factory('Slide', function($http) {

	// create a new object
	var slideFactory = {};
	
	// get a single slide
	slideFactory.get = function(id) {
		return $http.get('/api/slides/' + id);
	};
	
	// get all slides
	slideFactory.all = function() {
		return $http.get('/api/slides/');
	};

	// return our entire slideFactory object
	return slideFactory;

});