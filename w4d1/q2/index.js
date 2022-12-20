const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: "Sunit Bajracharya",
    resave: true,
    saveUninitialized: true
}))

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html");
});
app.use(express.urlencoded({ extended: false }));
app.post('/result', (req, res) => {
    req.session.name = req.body.name;
    req.session.age = req.body.age;

    res.redirect(`/output`);
});

app.get('/output', (req, res) => {
    let name = req.session.name;
    let age = req.session.age;
    if (!name) {
        name = "person";
    }
    if (!age) {
        age = 0;
    }
    res.send(`Hello ${name}, you are ${age} years old.`);
});

app.listen(3000, () => {
    console.log("Server is running");
});