const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    subTitle:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    url:{
        type: String,
        required: true
    }
})


module.exports = mongoose.model('Service', ServiceSchema);