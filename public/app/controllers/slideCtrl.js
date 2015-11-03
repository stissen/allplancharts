angular.module('slideCtrl', [])

.controller('slideController', function($routeParams, Slide, $window) {
  var vm = this;
  
  Slide.all().success(function(data) {
    vm.slides = data;  
	});
  
  vm.loadDashboard = function(dashboard){
    var slideId = dashboard.slideId; 
    $window.open ('slides/'+slideId,'_self',false)
  }
})

.controller('slideViewController', function($routeParams) {
   var vm = this;
    
   vm.html = "app/views/pages/slides/"+$routeParams.slideId+".html";	
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
		};
});


	