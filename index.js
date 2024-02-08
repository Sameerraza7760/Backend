const express = require("express"); // we requre a express
const app = express(); //  in this we get a whole express in a single variable
const port = 3000; // in this we desides that our server listen in port no 3000
require('dotenv').config()
app.get("/", (req, res) => {
  // in this we say that if path name / so you give the responsive hello world
  res.send("Hello World!");
});

app.get('/twitter', (req, res) => {
  // in this we say that if path name /twitter so you give the responsive Sameer raza
  res.send("Sameer raza");
});

app.get('/login',(req,res)=>{
    res.send("login page")
})

app.get('/signup',(req,res)=>{
    res.send("<h1>hi this is Signup</h1>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`); //  and  in this  if
});
