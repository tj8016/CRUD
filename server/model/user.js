const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name : {
            type : String,
            require : true,
            trime : true,
        },
        email : {
            type : String,
            require : true,
            trime : true,
        }
    }
)

module.exports = mongoose.model('User', userSchema);