app.controller('showQController', function($scope, $location, $routeParams, questionsFactory, answersFactory){
	$scope.question = '';

	var id = $routeParams.id
	questionsFactory.showQuestion(id, function(data){
		$scope.question = data
	});
	$scope.like = function(id){
		console.log(id,"in the client controller")
		questionsFactory.like(id)
	}
})
