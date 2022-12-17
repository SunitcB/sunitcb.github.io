const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {

    res.sendFile(__dirname + "/index.html");
});
app.use(express.urlencoded({ extended: false }));
app.post('/result', (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    res.render("result.ejs", { name: name, age: age });
});
app.listen(3000, () => {
    console.log("Server is running...")
});