const express = require("express");
const cors = require("cors");
require("dotenv").config();


const app  = express();

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.json({
        app:"Grade Laboratórios",
        status:"online"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    console.log(`servidor rodando em http://localhost:${PORT}`);
})