const express = require('express');
const app = express();

app.use("/assets", express.static('assets'));

app.get("/main(.html)?", function (request, response) {
    response.sendFile(`${__dirname}/html/index.html`);
});

app.get("/restaurant(.html)?", function (request, response) {
    response.sendFile(`${__dirname}/html/restaurant.html`);
});

app.get("/garage(.html)?", function (request, response) {
    response.sendFile(`${__dirname}/html/garage.html`);
});

app.get("/about(.html)?", function (request, response) {
    response.sendFile(`${__dirname}/html/about.html`);
});

app.get("/contacts(.html)?", function (request, response) {
    response.sendFile(`${__dirname}/html/contacts.html`);
});

app.use("/", function(request, response) {
    response.sendFile(`${__dirname}/html/index.html`);
});

app.listen(3000, function(requset, response) {
    console.log('Server is running');
});