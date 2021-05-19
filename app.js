const express = require('express');
const path = require('path');
const app = express();

app.use( express.static(path.resolve (__dirname,"./public")));

app.listen(3020, () => console.log('esto fue exitoso'));

app.get('/', (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/home.html"))
});

app.get('/login', (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/login.html"))
});

app.get('/register', (req, res) => {
    res.sendFile (path.resolve (__dirname, "./views/register.html"))
});