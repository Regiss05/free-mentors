// imported packages and codes
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import routerV2 from './v2/routes/route';
import dotenv from 'dotenv';
import pool from '../server/v2/config/dbConfig'
import {systemAdminDB} from '../server/v2/models/queries'

dotenv.config();

const app = express();
// eslint-disable-next-line camelcase

// port configuration imported
const  port  = process.env.PORT || 4500;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API Routes initialized
app.use('/api/v2/', routerV2);

app.get('/', (req, res) => res.status(200).send({
  status:200,
  message: 'Welcom to free-mentor ship'
}));

app.use((err, req, res, next) => {
  if (err) {
    return res.status(500).json({
      status: 500,
      err: 'internal server',
    });
  } next();
});

// read the ported opened
app.listen(port, () => {
  console.log(`Server now listening at localhost:${port}`);
});

pool.query(systemAdminDB).then(res =>{
 
}).catch(err =>{
});

export default app;
