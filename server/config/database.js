const mongoose = require('mongoose');
require('dotenv').config();


const dbConnect = () => {
    mongoose.connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(console.log('DB Connected'))
    .catch((error) => {
        console.log("DB Connected Issue");
        console.log(error);
    })
}

module.exports = dbConnect;