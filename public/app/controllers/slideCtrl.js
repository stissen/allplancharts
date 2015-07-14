angular.module('slideCtrl', ['slideService'])

.controller('slideController', function(Slide) {

	var vm = this;

	// set a processing variable to show loading things
	vm.processing = true;

	// grab all the slides at page load
	Slide.all()
		.success(function(data) {

			// when all the slides come back, remove the processing variable
			vm.processing = false;

			// bind the slides that come back to vm.slides
			vm.slides = data;
		});
})

// controller applied to slide view page
.controller('slideViewController', function($routeParams, Slide) {
	
	var vm = this;
	// set a processing variable to show loading things
	vm.processing = true;
	
	Slide.get($routeParams.slideId)
		.success(function(data) {
			
			// when the slide comes back, remove the processing variable
			vm.processing = false;

			// bind the slide that comes back to vm.slide
			vm.slide = data;
		});	
});


	