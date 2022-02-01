const mongoose = require('mongoose');

const projectSchema = mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    objectif:{
        type: String,
        required: false
    },
    workState:{
        type: Array,
        required: false
    },
    type:{
        type: String,
        enum:["Réseaux Sociaux", "Print", "Identité de marque"],
        required: true
    },
    images:{
        type: Array,
        required: true
    },
    principalImage:{
        type: String,
        required: true
    },
    videoLink:{
        type: Array,
        required: false
    },
    createdAt:{
        type: Date,
        default: Date.now(),
        required: true
    }
});

module.exports = mongoose.model('Project', projectSchema);