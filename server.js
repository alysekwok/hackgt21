const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const port = process.env.port || 5000;

app.use(cors());
app.use(express.json())

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

//const user = require('./models/userRouter')
//const order = require('./models/orderRouter')
const users = require('./routes/users.js');
app.use('/api', users);
//app.use('/api', user)
//app.use('/api', order)


app.listen(port, () => console.log(`Server started on port ${port}`));