const express = require('express');
const router = express.Router();
const RoomBooking = require('../models/RoomBooking');

// Create a new room booking
router.post('/', async (req, res) => {
  try {
    const newBooking = new RoomBooking(req.body);
    const savedBooking = await newBooking.save();
    res.json(savedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all room bookings
router.get('/', async (req, res) => {
  try {
    const bookings = await RoomBooking.find();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update a room booking by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedBooking = await RoomBooking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a room booking by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedBooking = await RoomBooking.findByIdAndDelete(req.params.id);
    res.json(deletedBooking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
