const mongoose = require('mongoose');

const resolutionSchema = new mongoose.Schema({
    name:{ //or title
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Resolution', resolutionSchema);