var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// slide schema 
var SlideSchema   = new Schema({
	slideId: { type: String, required: true, unique: true},
	name: { type: String, required: true, unique: true}
});

SlideSchema.static('findBySlideId', function (slideId, callback) {
  return this.findOne({ slideId: slideId }, callback);
});

module.exports = mongoose.model('Slide', SlideSchema);