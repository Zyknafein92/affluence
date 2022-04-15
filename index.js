const express = require('express');
const app = express();
const reservationRoutes = require('./routes/reservationRoutes');

/*  Configuration  */
app.use(express.json());
app.use(reservationRoutes);


/* Alerte listen */
app.listen(3000, () => console.log('connect to port 3000'));
