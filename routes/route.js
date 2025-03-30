const express = require('express')

const router = express.Router()

const Booking = require('../controller/Booking')
const BookingDetails = require('../controller/BookingDetails')
const AllGuests = require('../controller/AllGuests')
const CancelBooking = require('../controller/CancelBooking')
const ModifyBooking = require('../controller/ModifyBooking')



router.get('/api/booking-room',    Booking)         // • Booking Room API:
router.get('/api/booking-details', BookingDetails)  // • View Booking Details API:
router.get('/api/all-guests',      AllGuests)       // • View All Guests in the Hotel API:
router.get('/api/cancel-booking',  CancelBooking)   // • Cancel Room Booking API:
router.get('/api/modify-booking',  ModifyBooking)   // • Modify Booking API:



module.exports = router