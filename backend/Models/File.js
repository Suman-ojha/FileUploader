const mongoose = require('mongoose');
const User = require('./User');

const fileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  originalname: {
    type: String,
    required: true,
  },
  mimetype: {
    type: String,
    required: true,
  },
  filename: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
},
{
  toJSON: {
    transform: (doc, ret, options) => {
      ["path", "filename"].forEach((key) => delete ret[key]);
      return ret;
    },
  },
}
);

const File = mongoose.model('File', fileSchema);
module.exports = { File };
