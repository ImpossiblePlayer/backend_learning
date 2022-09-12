"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = (0, express_1["default"])();
var port = 3000;
app.get('/', function (req, res) {
    res.send('%database%');
});
app.post('/api/login', function (req, res) {
    res.send('login info got');
});
app.listen(port, function () {
    console.log("listening on port ".concat(port));
});
