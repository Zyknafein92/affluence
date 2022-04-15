const express = require('express');
const app = express();
const reservationRoutes = require('./routes/reservationRoutes');

app.use(express.json());
app.use(reservationRoutes);


app.listen(3000, () => console.log('connect to port 3000'));
