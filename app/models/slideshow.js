var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

// slideshow schema 
var SlideshowSchema   = new Schema({
	slideshowId: { type: String, required: true, unique: true},
	slides: { type: [String], required: false}
});


SlideshowSchema.static('findBySlideshowId', function (slideshowId, callback) {
  return this.find({ slideshowId: slideshowId }, callback);
});

module.exports = mongoose.model('Slideshow', SlideshowSchema);