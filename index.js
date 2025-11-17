import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://api.openweathermap.org/data/3.0/onecall"
const API_key = "07a40a59923ceb7b9b78d05376dd1279"

const lat = 33.44
const lon = 94.04

app.get("/", async (req, res)=>{
    try {
        const result = await axios.get(API_URL + `?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${API_key}`)
        res.render("index.ejs", { data: result.data})
    }
    catch(error) {
        res.render("index.ejs", { data: JSON.stringify(error.response.data) })
    }
    
})

app.listen(port, ()=>{
    console.log(`The server is running on port: ${port}`);
});