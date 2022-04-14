const reservationRouter = require('express').Router();
const roomService = require('../services/roomService');

reservationRouter.get('/reservations', (req,res) => {
   const date = req.query.date;
   const resourceId = req.query.resourceId;
   let room = roomService.getRoomReservations(res.data);

})

reservationRouter.get('/timetables', (req, res) => {
   const resource
})
