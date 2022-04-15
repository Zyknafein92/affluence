const reservationRouter = require('express').Router();
const roomService = require('../services/roomService');
const axios = require('axios');
const moment = require('moment');

reservationRouter.get('/available/', async (req,res) => {
   const date = new Date(req.query.date);
   const resourceId = req.query.resourceId;

   axios.all([
      axios.get('http://localhost:8080/reservations', {params: { date: date, resourceId: resourceId }, timeout: 3000}),
      axios.get('http://localhost:8080/timetables', {params: { date : date, resourceId: resourceId}, timeout:3000})
   ]).then(axios.spread((obj1, obj2) => {
      if(obj1 === '' || obj2 === '') {
         res.status(400).message('Error: something is available or mismatch')
      } else {
         const isRoomOpen = roomService.isRoomIsOpenAtThisTime(obj2.data, date);
         const isRoomAvailableAtThisTime = roomService.isRoomAvailableAtThisTime(obj1.data, date);
         const isRoomAvailableAfterChecked = {
            available: roomService.isAvailableAfterAllCheck(isRoomOpen, isRoomAvailableAtThisTime)
         };
         res.send(isRoomAvailableAfterChecked);
      }
   })).catch(e => {
      if(isNaN(date.getTime()) && (resourceId === undefined || resourceId === '')) {
         res.status(400).send('Error, correct query is /?date&?resourceId');
      } else if (moment(date, 'YYYY-MM-DD hh:mm:ss', true)) {
         res.status(400).send('Error, date mismatch or missing, follow : YYYY-MM-DD hh:mm:ss');
      } else if (resourceId !== '1337') {
         res.status(400).send('Resource id is only available at 1337');
      }
   });

});

module.exports = reservationRouter;

