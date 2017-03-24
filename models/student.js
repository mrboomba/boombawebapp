var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
      type: String
    },
    student_id: {
      type: Number
    }
});
  module.exports = mongoose.model('student', schema);