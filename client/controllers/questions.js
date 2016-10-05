app.controller('questionsController', function($scope, questionsFactory){
	$scope.questions = [];

	questionsFactory.getQuestions(function(data){
		$scope.questions = data;

	})
	$scope.addQuestion = function(user){
		$scope.newQuestion.name = user;
		questionsFactory.addQuestion($scope.newQuestion, function(data){
			$scope.questions.push(data.data)
		})
		$scope.newQuestion = {};
	}

})