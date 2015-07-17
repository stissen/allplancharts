angular.module('slideCtrl', [])
.controller('slideViewController', function($log, $routeParams, Slide) {
    
    var vm = this;
    
    Slide.get($routeParams.slideId)
		.success(function(slide) {
			
			// bind the slideshow that comes back to vm.slideshow
			vm.slide = slide;
		  vm.html = "app/views/pages/slides/"+slide.slideId+".html";	
			});
			
			
});


	