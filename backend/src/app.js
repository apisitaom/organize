const express = require('express');
require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const borrowRoute = require('./routes/borrow');
const categoryRoute = require('./routes/category');
const employeeRoute = require('./routes/employee');
const objectRoute = require('./routes/object');
const positionRoute = require('./routes/position');

const app = express();
const port = process.env.PORT || 4002

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static('public'));

app.use('/borrow', borrowRoute);
app.use('/category', categoryRoute);
app.use('/employee', employeeRoute);
app.use('/object', objectRoute);
app.use('/position', positionRoute);

app.use((req, res, next) => {
    console.log(`server on path ${req.ip} ${req.method} ${req.path}`);
    next();
});

app.use('/images', express.static(path.join(__dirname + '/../public/images')));

app.get(`/`, (req, res) => {
    res.json({ info : `ORANIZE WEB SITE: ${port}`});
});

app.listen(port, () => {
    console.log(`server run on port ${port}`);
})