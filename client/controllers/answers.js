app.controller('answersController',function($scope, answersFactory){
	$scope.answers = [];

	answersFactory.getAnswers(function(data){
		$scope.answers = data;
	})

	$scope.addAnswer = function(question){
		$scope.newAnswer.question = question;
		answersFactory.addAnswer($scope.newAnswer, function(data){
			$scope.answers.push(data.data)
		})
		$scope.newAnswer = {};
	}
})