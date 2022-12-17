const express = require('express');
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/css'))
// app.set('views', path.join(__dirname, "views"));
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    let cssFile = ""
    if(hour>=6 && hour<=18){
        cssFile = "day";
    } else {
        cssFile = "night";
    }
    res.render(path.join(__dirname, "views", "index.ejs"), {cssFile: cssFile});
});

app.post('/result', (req, res)=>{
    let name = req.body.name;
    let age = req.body.age;

    res.send(`Hello ${name}, you are ${age} years old.`);
});
app.listen(3000, ()=>{
    console.log("Server is running...")
});