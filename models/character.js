var mongoose = require('mongoose');

//representation of character data in MongoDB
var characterSchema = new mongoose.Schema({
	characterId: {type: String, unique: true, index:true},
	name: String,
	race: String,
	gender: String,
	bloodline: String,
	wins: {type:Number, default:0},
	losses: {type: Number, default:0},
	reports: {type: Number, default:0},
	random: {type: [Number], index: '2d'},
	voted: {type: Boolean, default:false},
});


//create an export the model based on the character schema
module.exports = mongoose.model('Character', characterSchema);
