const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();
const apiRoute = require('./routes/apiRoute');
const htmlRoute = require('./routes/htmlRoute');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

app.use('/api', apiRoute);
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});