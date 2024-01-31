const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const roomBookingsRoute = require('./routes/roomBookings');

const app = express();
app.use(bodyParser.json());

/* 
This is how we connect to the database. this is commented out for now, until we have one set up

mongoose.connect('', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
*/

app.use(express.json());
app.use(cors());

// routes
app.use('/api/room-bookings', roomBookingsRoute);

// ports
const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
