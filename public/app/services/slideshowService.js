angular.module('slideshowService', [])

.factory('Slideshow', function($http) {

	// create a new object
	var slideshowFactory = {};
	
	// get a single slideshow
	slideshowFactory.get = function(id) {
		return $http.get('/api/slideshows/' + id);
	};
	
	// get all slideshows
	slideshowFactory.all = function() {
		return $http.get('/api/slideshows/');
	};

	// return our entire slideshowFactory object
	return slideshowFactory;

});