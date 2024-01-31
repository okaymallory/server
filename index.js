// Node server with express

const express = require ('express')
const cors = require ('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = (express)
app.use(bodyParser.json())

/* connect to database
mongoose.connect('')
const db = mongoose.connection

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

*/



// port 8080
app.use(express.json())
app.use(cors())
const PORT = 8080
app.listen(PORT, () => {
    console.log('Server is unning on PORT ${PORT}')
})