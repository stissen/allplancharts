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
	
	// create a user
	slideFactory.create = function(slideData) {
		return $http.post('/api/slides/', slideData);
	};

	// return our entire slideFactory object
	return slideFactory;

});