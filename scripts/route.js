bookingWebsiteApp.config(['$routeProvider', function($routeProvider) {
   	$routeProvider
   	.when('/', {
      templateUrl: 'partials/quick_tickets.html', 
      controller: 'mainController'
   	})
  	.when('/quick_tickets', {
      templateUrl: 'partials/quick_tickets.html',
      controller: 'quick_tickets'
   	})
   	.when('/by_movie', {
      templateUrl: 'partials/quick_tickets.html',
      controller: 'quick_tickets'
   	})
   	.when('/by_cinemas', {
      templateUrl: 'partials/quick_tickets.html',
      controller: 'quick_tickets'
   	})
   	.otherwise({
      redirectTo: 'partials/quick_tickets.html'
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

