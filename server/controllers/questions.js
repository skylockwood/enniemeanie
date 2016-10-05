var mongoose = require('mongoose')
var Question = mongoose.model('Question')
var User = mongoose.model('User')
module.exports = (function(){
	return{
		index: function(req, res){
			Question.find({}, function(err, questions){
				if(err){
					console.log(err);
				}else{
					res.json({questions:questions})
				}
			})
		},
		add: function(req, res){
			User.findOne({name: req.body.name}, function(err, user){
				var question = new Question({content:req.body.content, description:req.body.description})
				user._question.push(question);
				user.save(function(err){
					if (err){
						res.json({err:err});
					}else{
						question.save(function(err, data){
							if(err){
								console.log(err)
							}
							res.json({data: data})
						})
					}
				})	
			})	
		},
		show: function(req, res){
			Question.find({_id:req.params.id}, function(err, question){
				if(err){
					res.json({status: false, err:err})
				}else{
					res.json({status: true, question:question})
				}
			})

		},
		like: function(req,res){
			Question.findOne({_id: req.body._id}, function(err, question){
				if(err){
					res.json({status: false, err:err})
				}else{
					question._user.push(req.session.name);
					question.save(function(err, data){
						if(err){
							console.log(err)
						}
						res.json({data:data})
					})
				}
			})
		}
	}
})()