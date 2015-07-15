angular.module('slideshowCtrl', ['slideshowService', 'slideService'])

.controller('slideshowController', function(Slideshow) {

	var vm = this;
	// grab all the slideshows at page load
	Slideshow.all()
		.success(function(data) {

		
			// bind the slideshows that come back to vm.slideshows
			vm.slideshows = data;
		});
})

// controller applied to slideshow view page
.controller('slideshowViewController', function($log, $routeParams, Slideshow, Slide) {
	
	var vm = this;
	
	Slideshow.get($routeParams.slideshowId)
		.success(function(slideshow) {
			
			// bind the slideshow that comes back to vm.slideshow
			vm.slideshow = slideshow;
			var slideIds = slideshow.slides;
			
			Slide.all().success(function(allSlides) {
				var slides = [];
				
				//iterate all slides
				var allSlidesLength = allSlides.length;
				for (var i = 0; i < allSlidesLength; i++) {
					var currentSlide = allSlides[i];
					var currentSlideId = currentSlide.slideId;
					//if slideId of a slide is in the array slideIds, then add this slide to slides
					if(slideIds.indexOf(currentSlideId) > -1){
						slides.push(currentSlide);
						$log.log('Log: '+currentSlideId);
					}
				}
				//bind slides to slides
				vm.slides = slides;
			
			});
			
			
		});
});


	