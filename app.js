const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//! Admin routes
const adminRoutes = require('./routes/admin')
//! Shop  routes
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);
app.use('/', shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(1212);

