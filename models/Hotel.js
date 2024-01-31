// schema for rooms
const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  rooms: [
    // room identifier: like a room number
    {
      identifier: {
        type: Number,
        required: true,
      },
    // type of room: standard, deluxe, etc
      type: {
        type: String,
        required: true,
      },

    // room availability: yes or no
      available: {
        type: String,
        required: true,
      },
    },
  ],
  // other fields here
});

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;
