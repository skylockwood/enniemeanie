var session = require('./../controllers/session.js')
var questions = require('./../controllers/questions.js')
var answers = require('./../controllers/answers.js')
module.exports = function(app){
	app.post('/login', function(req,res){
		session.login(req, res);
	})
	app.get('/logout', function(req,res){
		session.logout(req,res)
	})
	app.get('/getSession', function(req,res){
		session.getSession(req, res)
	})
	app.get('/questions/get', function(req, res){
		questions.index(req, res)
	})
	app.post('/questions/add', function(req, res){
		questions.add(req, res)
	})
	app.get('/questions/show/:id', function(req, res){
		questions.show(req,res)
	})
	app.post('/questions/like', function(req,res){
		console.log(req.body,"routes")
		questions.like(req, res)
	})
	app.get('/answers/get', function(req, res){
		answers.index(req, res)
	})
	app.post('/answers/add', function(req,res){
		answers.add(req, res)
	})


}