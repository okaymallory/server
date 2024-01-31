const mongoose = require('mongoose');

const roomBookingSchema = new mongoose.Schema({
  roomType: String,
  checkInDate: Date,
  checkOutDate: Date,
});

const RoomBooking = mongoose.model('RoomBooking', roomBookingSchema);

module.exports = RoomBooking;
