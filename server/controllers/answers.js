var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var Answer = mongoose.model('Answer')
module.exports = (function(){
	return{
		index: function(req, res){
			Answer.find({}, function(err, answers){
				if(err){
					console.log(err);
				}else{
					res.json({answers:answers})
				}
			})
		},
		add: function(req, res){
			Question.findOne({content: req.body.question}, function(err, question){
				console.log(question, "is the question")
				var answer = new Answer({content:req.body.content, description: req.body.description})
				answer.user = req.session.name;
				question._answer.push(answer);
				question.save(function(err){
					if(err){
						res.json({err:err});
					}else{
						answer.save(function(err, data){
							if(err){
								console.log(err)
							}
							res.json({data: data})
						})
					}
				})
			})
		}
	}
})();