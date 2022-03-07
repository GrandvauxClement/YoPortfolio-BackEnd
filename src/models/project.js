const mongoose = require('mongoose');

const UplodedFile = mongoose.Schema({
    path: String,
    type: String,
})
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
        type: [String],
        required: false
    },
    type:{
        type: String,
        enum:["Réseaux Sociaux", "Print", "Identité de marque"],
        required: true
    },
    images:{
      key: [String],
      mimeType: [String],
      bucket: [String],
      size: [String],
    },
   /* principalImage:{
        type: String,
        required: false
       /!* mime: {
            type: String,
            required: false
        },
        s3Key: {
            type: String,
            required: false
        },
        bucket: {
            type: String,
            required: false
        }*!/
    },*/
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