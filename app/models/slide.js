var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// slide schema 
var SlideSchema   = new Schema({
	slideId: { type: String, required: true, index: { unique: true }},
	text: { type: String, required: true}
});

module.exports = mongoose.model('Slide', SlideshowSchema);