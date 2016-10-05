var mongoose = require('mongoose');
var QuestionSchema = new mongoose.Schema({
	content: String,
	description: String,
	_user: [{type: mongoose.Schema.Types.Mixed, ref: "User"}],
	_answer: [{type: mongoose.Schema.Types.Mixed, ref: "Answer"}]
})

mongoose.model('Question', QuestionSchema)