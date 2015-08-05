angular.module('slideCtrl', [])

.controller('slideController', function($log, $routeParams, Slide, $scope) {
    
    var vm = this;
  	// grab all the slides at page load
  	Slide.all()
  		.success(function(data) {
  
  		
  			// bind the slides that come back to vm.slides
  			vm.slides = data;
  		});
})

.controller('slideViewController', function($log, $routeParams, Slide, $scope) {
    
    var vm = this;
    
    Slide.get($routeParams.slideId)
		.success(function(slide) {
			
			// bind the slideshow that comes back to vm.slideshow
			vm.slide = slide;
		  vm.html = "app/views/pages/slides/"+slide.slideId+".html";	
			});
})

.controller('sampleGoogleChartController', function($log, $scope) {
    
		$scope.chart = {
      "type": "ColumnChart",
      "cssStyle": "",
      "data": {
      
        "cols": [
              {"id":"","label":"Topping","pattern":"","type":"string"},
              {"id":"","label":"Slices","pattern":"","type":"number"}
            ],
        "rows": [
              {"c":[{"v":"Mushrooms","f":null},{"v":3,"f":null}]},
              {"c":[{"v":"Onions","f":null},{"v":1,"f":null}]},
              {"c":[{"v":"Olives","f":null},{"v":1,"f":null}]},
              {"c":[{"v":"Zucchini","f":null},{"v":1,"f":null}]},
              {"c":[{"v":"Pepperoni","f":null},{"v":2,"f":null}]}
            ]
      }
		}
			
})

.controller('sampleTwitterFeedController', function($log, $scope) {
    
		
			
});


	