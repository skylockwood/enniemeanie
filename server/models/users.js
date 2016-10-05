var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
	name: String,
	_question: [{type:mongoose.Schema.Types.Mixed, ref: 'Question'}],
	_answer: [{type: mongoose.Schema.Types.Mixed, ref: 'Answer'}]
})
mongoose.model('User', UserSchema)