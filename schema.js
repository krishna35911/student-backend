const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
   emailid: {
        type: String,
        required: true,
      },
  studentname: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  phnum: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
})

const student = mongoose.model('Students', studentSchema);

module.exports = student;