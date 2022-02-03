const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    object:{
        type: String,
        required: false
    },
    firstName:{
      type: String,
      required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    message:{
        type: String,
        required: true,
    },
    devis:{
        type: Boolean,
        required: true,
        default: false
    }
});

module.exports = mongoose.model('Message', messageSchema);