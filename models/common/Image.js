const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    fileData : {
        type: Buffer,
        required: true
    }
});

module.exports = mongoose.model('Image', ImageSchema);