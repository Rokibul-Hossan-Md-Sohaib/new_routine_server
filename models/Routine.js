const mongoose = require('mongoose');

const routineSchema = new mongoose.Schema(
  {
   teacherIds: [{
    type: String,
    required: true,
  }]
  ,

    teacherNames: [
      {
        type: String,
        required: false,
      }
    ],
    subject: {
      type: String,
      required: true,
    },
    class: {
      type: String,
      required: true,
    },
    section: {
      type: String,
      required: true,
    },
    campus: {
      type: String,
      enum: ['boys', 'girls', 'port'],
      required: true,
    },
    totalClasses: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Routine', routineSchema);
