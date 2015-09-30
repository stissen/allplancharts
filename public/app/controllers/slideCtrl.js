angular.module('slideCtrl', [])

.controller('slideController', function($routeParams, Slide) {
  var vm = this;
  
  var slides = [
    {name : "Sample Google Chart", slideId : "sampleGoogleChart"},
    {name : "Sample Twitter Feed", slideId : "sampleTwitterFeed"},
    {name : "Sample Facebook Feed", slideId : "sampleFacebookFeed"},
    {name : "Sample Dashboard", slideId : "sampleDashboard"}
  ];
 
  vm.slides = slides;  
 
})

.controller('slideViewController', function($routeParams, Slide) {
  
  var vm = this;
  
  Slide.get($routeParams.slideId)
  .success(function(slide) {
  	
  	// bind the slideshow that comes back to vm.slideshow
  	vm.slide = slide;
    vm.html = "app/views/pages/slides/"+slide.slideId+".html";	
  	});
})

.controller('sampleGoogleChartController', function() {
    
    var vm = this;
    
		vm.chart = {
      "type": "ColumnChart", 
      "cssStyle": "",
      "data": {
      
        "cols": [
              {"id":"","pattern":"","type":"string"},
              {"id":"","label":"Country","pattern":"","type":"number"}
            ],
        "rows": [
              {"c":[{"v":"Germany","f":null},{"v":3,"f":null}]},
              {"c":[{"v":"Austria","f":null},{"v":1,"f":null}]},
              {"c":[{"v":"Switzerland","f":null},{"v":1,"f":null}]},
              {"c":[{"v":"France","f":null},{"v":1,"f":null}]},
              {"c":[{"v":"Spain","f":null},{"v":2,"f":null}]}
            ]
      }
		}
			
})

.controller('sampleFacebookFeedController', function() {
  
});


	