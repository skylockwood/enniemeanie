app.controller('showAController', function($scope, $location, $routeParams, answersFactory, questionsFactory){
	$scope.answers = [];

	var id = $routeParams.id
	questionsFactory.showQuestion(id, function(data){
		$scope.question = data
	});
})