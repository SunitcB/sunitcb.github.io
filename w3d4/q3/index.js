const express = require('express');
const app = express();

app.use(express.static(__dirname + '/css'))

app.get('/', (req, res) => {
    const date = new Date();
    const hour = date.getHours();
    if(hour>=6 && hour<=18){
        console.log("Day");
        res.sendFile(__dirname + "/index-day.html");
    } else {
        console.log("Night");
        res.sendFile(__dirname + "/index-night.html");
    }
});
app.use(express.urlencoded({extended:false}));
app.post('/result', (req, res)=>{
    let name = req.body.name;
    let age = req.body.age;

    res.send(`Hello ${name}, you are ${age} years old.`);
});
app.listen(3000, ()=>{
    console.log("Server is running...")
});