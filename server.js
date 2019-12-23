
//define our package here 
const express = require ("express")

const app = express();

const PORT = process.env.PORT || 2020

app.use(express.urlencoded({ extended: true }));
app.use(express.json());