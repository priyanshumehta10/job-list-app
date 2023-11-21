import express from 'express';
import router from './routes/route.js'
import bodyParser from 'body-parser';
import cors from 'cors';
import dbConnection from './database/db.js';
import dotenv from "dotenv";


const app = express();
dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json({extended: true}));
app.use('/',router)

const PORT = process.env.PORT || 8000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

dbConnection(USERNAME,PASSWORD);

app.listen(PORT,()=> console.log(`listening on port ${PORT}`))