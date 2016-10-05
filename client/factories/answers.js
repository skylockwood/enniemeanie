app.factory('answersFactory', function($http){
	var factory = {};
	factory.answers = '';

	factory.getAnswers = function(callback){
		$http.get('/answers/get').success(function(data){
			factory.answers = data.answers;
			callback(factory.answers)
		})
	}
	factory.addAnswer = function(answer, callback){
		$http.post('/answers/add', answer).success(function(data){
			callback(data)
		})
	}
	factory.like = function(question, callback){
		console.log(question, "in the client factory")
		$http.post('/answers/like', question).success(function(data){
			callback(data)
		});
	}
	return factory
})