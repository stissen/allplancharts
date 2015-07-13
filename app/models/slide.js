var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// slide schema 
var SlideSchema   = new Schema({
	slideId: { type: String, required: true, index: { unique: true }},
	text: { type: String, required: true}
});

SlideSchema.static('findBySlideId', function (slideId, callback) {
  return this.find({ slideId: slideId }, callback);
});

module.exports = mongoose.model('Slide', SlideSchema);