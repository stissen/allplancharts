angular.module('slideshowCtrl', [])

.controller('slideshowController', function(Slideshow) {

	var vm = this;
	// grab all the slideshows at page load
	Slideshow.all()
		.success(function(data) {

		
			// bind the slideshows that come back to vm.slideshows
			vm.slideshows = data;
		});
})

.controller('slideshowRunController', function($log, $routeParams, Slideshow, Slide, $timeout, $route, $rootScope) {
	
	
	var vm = this;
	
	//determine what slidenumber will be shown
	var counter = $rootScope.counter;
	if (!counter){
		counter = 1;
	}else{
		counter++;
	}
	
	Slideshow.get($routeParams.slideshowId).success(function(slideshow) {
		// bind the slideshow that comes back to vm.slideshow
		vm.slideshow = slideshow;
		var slides = slideshow.slides;
		var slidesLength = slides.length;
		//if at the end of the slideshow: start at the beginning
		if (counter > slidesLength){
			counter = 1;
		}
		$rootScope.counter = counter;
		var slideId = slides[counter-1];
		Slide.get(slideId).success(function(slide) {
		
			// bind the slide
			vm.slide = slide;
			vm.html = "app/views/pages/slides/"+slide.slideId+".html";	
		});
		
	});
	
	//redirect after x secondes
	$timeout(function () {
		//check if we're still in the slideshow. Only then do the reload
		var params = $route.current.templateUrl;
	  if(params == "app/views/pages/slideshows/run.html"){
	   	$route.reload();
	  }
  }, $routeParams.duration*1000);
  
	
})

// controller applied to slideshow view page
.controller('slideshowViewController', function($log, $routeParams, Slideshow, Slide, $rootScope) {
	
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
					}
				}
				//bind slides to slides
				vm.slides = slides;
			});
		});
		$rootScope.counter = 0;
});


	