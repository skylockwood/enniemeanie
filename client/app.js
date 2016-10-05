var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/',{
		templateUrl:'partials/login.html'
	})
	.when('/dashboard',{
		templateUrl: 'partials/dashboard.html'
	})
	.when('/new_question',{
		templateUrl: 'partials/newQuestion.html'
	})
	.when('/question/:id/new_answer',{
		templateUrl: 'partials/answer.html'
	})
	.when('/questions/:id',{
		templateUrl: 'partials/show.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})