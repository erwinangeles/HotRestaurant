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
  res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/reserve', function(req, res) {
  res.sendFile(path.join(__dirname, 'reservation.html'));
});


app
  .route('/api/tables')
  .get(function(req, res) {
    res.json(reservations);
  })
  .post(function(req, res) {
    const newReservations = req.body;
    reservations.push(newReservations);
    res.json({ status: true, message: 'Reservation Added' });
  });

  app
  .route('/api/waitlist')
  .get(function(req, res) {
    res.json(waitlist);
  })
  .post(function(req, res) {
    const newWait = req.body;
    waitlist.push(newWait);
    res.json({ status: true, message: 'Waitlist Reservation Added' });
  });

app.listen(3000, function() {
  console.log('Running at port 3000');
});