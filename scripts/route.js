bookingWebsiteApp.config(['$routeProvider', function($routeProvider) {
   	$routeProvider
   	.when('/', {
      templateUrl: 'index.html', 
      controller: 'mainController'
   	})
  	.when('/quick_tickets', {
      templateUrl: 'quick_tickets.html',
      controller: 'mainController'
   	})
   	.otherwise({
      redirectTo: '/quick_tickets'
   	});
	
}]);





/*
bookingWebsiteApp.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		$stateProvider
			.state('/',{
				url:'/',
				templateUrl:'index.html',
				controller: 'mainController'
			})
			.state('/quick_tickets',{
				url:"/quick_tickets",
				templateUrl:'partials/quick_tickets.html',
				controller: 'myAppController'
			})
			.state('movie_screen_selection',{
				url:"/movie_screen_selection",
				templateUrl:'partials/movie_screen_selection.html',
				controller: 'movie_sreeen_selection'
			})
			.state('movie_selection',{
				url:"/movie_selection",
				templateUrl:'partials/movie_selection.html',
				controller: 'myAppController'
			});
			

});
*/

