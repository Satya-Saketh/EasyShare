import express from 'express';
import cors from 'cors';
import router from './Routes/routes.js';
import DBconnection from './Database/db.js';


const app = express();

app.use(cors());

DBconnection();

app.use('/', router)

app.listen(8000, () => {

    console.log('server is running on port 8000');

});