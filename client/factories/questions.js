app.factory('questionsFactory', function($http, $location){
	var factory = {};
	factory.questions = '';

	factory.getQuestions = function(callback){
		$http.get('/questions/get').success(function(data){
			factory.questions = data.questions;
			callback(factory.questions)
		})
	}
	factory.addQuestion = function(question, callback){
		$http.post('/questions/add', question).success(function(data){
			callback(data)
		})
	}
	factory.showQuestion = function(id, callback){
		$http.get('/questions/show/'+id).success(function(output){
			callback(output);
		});
	}
	factory.like = function(id, callback){
		console.log(id, "in the client factory")
		$http.post('/questions/like', id).success(function(data){
			callback(data)
		});
	}
	return factory
})