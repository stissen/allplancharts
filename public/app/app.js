angular.module('chartsApp', ['googlechart', 'ngAnimate', 'app.routes', 'authService', 'mainCtrl', 'userCtrl', 'userService','slideshowService', 'slideshowCtrl','slideService', 'slideCtrl', 'trafficChartCtrl'])

// application configuration to integrate token into requests
.config(function($httpProvider) {

	// attach our auth interceptor to the http requests
	$httpProvider.interceptors.push('AuthInterceptor');

});