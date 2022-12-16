const express = require('express');
const app = express();
app.get('/', (req, res) => {
    
    res.sendFile(__dirname + "/index.html");
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