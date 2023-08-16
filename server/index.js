const express = require('express');
require('dotenv').config();
const user = require('./routes/userRoutes');
const dbConnect = require('./config/database');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.use('/api/v1', user);

app.listen(PORT, () => {
    console.log(`App started at Port ${PORT}`)
})

dbConnect();

app.get('/', (req, res) => {
    res.send("Hello everyone");
})