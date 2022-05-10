// const express = require('express')
import express from 'express';
import connectDB from "./db/connectdb.js";

import {join} from 'path';
import web from "./routes/web.js";
import router from './routes/web.js';
const app = express();


const port = process.env.PORT || '4000'
const DATABASE_URI = process.env.DATABASE_URI || "mongodb://localhost:27017";

connectDB(DATABASE_URI);

app.use(express.urlencoded({extended:false}));

// static file
router.use(express.static(join(process.cwd(), "public")))
app.use('/employee',express.static(join(process.cwd(), "public")))
app.use('/employee/edit',express.static(join(process.cwd(), "public")))

// Set Template Engine 
app.set("view engine", "ejs");

// Load Routes
app.use("/employee", web);

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port} `)
})