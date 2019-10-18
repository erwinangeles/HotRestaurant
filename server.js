const express = require('express');
const path = require('path');

const app = express();

const reservations = [
  {
    name: 'Erwin',
    phonenumber: '555-555-5555',
    email: 'erwin@erwin.com',
    id: '0001'
  }
];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'views/index.html'));
});

app
  .route('/api/reservations')
  .get(function(req, res) {
    res.json(reservations);
  })
  .post(function(req, res) {
    const newReservations = req.body;
    reservations.push(newReservations);
    res.json({ status: true, message: 'Reservation Added' });
  });

app.listen(3000, function() {
  console.log('Running at port 3000');
});