(function () {
	var scrumApp = angular.module('scrumApp', ['ngRoute']).config(function($routeProvider){

		$routeProvider
		.when('/admin-dashboard', {
			templateUrl: 'views/ambassador-dashboard.en.html'
		})
		.when('/company-dashboard', {
			templateUrl: 'views/company-dashboard.en.html'
		})
		.when('/confirm-new-customer', {
			templateUrl: 'views/confirm-new-customer.en.html'
		})
		.otherwise({redirectTo: 'admin-dashboard'});

	});

	scrumApp.controller('NavigateCtrl', ['$scope', function ($scope) {
	  
		$scope.setActive = function(currentid){

			angular.element('#main-nav').find('li').each(function(){
				angular.element(this).removeClass('active');
			});

			angular.element("#" + currentid).addClass('active');
		}

	}]);
}());