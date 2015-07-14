angular.module('slideshowCtrl', ['slideshowService'])

.controller('slideshowController', function(Slideshow) {

	var vm = this;

	// set a processing variable to show loading things
	vm.processing = true;

	// grab all the slideshows at page load
	Slideshow.all()
		.success(function(data) {

			// when all the slideshows come back, remove the processing variable
			vm.processing = false;

			// bind the slideshows that come back to vm.slideshows
			vm.slideshows = data;
		});
})

// controller applied to slideshow view page
.controller('slideshowViewController', function($routeParams, Slideshow) {
	
	var vm = this;
	// set a processing variable to show loading things
	vm.processing = true;
	
	Slideshow.get($routeParams.slideshowId)
		.success(function(data) {
			
			// when the slideshow comes back, remove the processing variable
			vm.processing = false;

			// bind the slideshow that comes back to vm.slideshow
			vm.slideshow = data;
		});	
});


	