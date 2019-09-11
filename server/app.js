// imported packages and codes
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './v1/routes/route';
import routerV2 from './v2/routes/route';
import Portconfig from './v1/config/PortConfig';
import dotenv from 'dotenv';
import pool from '../server/v2/config/dbConfig'
import {systemAdminDB} from '../server/v2/models/queries'

dotenv.config();

const app = express();
// eslint-disable-next-line camelcase

// port configuration imported
const { port } = Portconfig;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API Routes initialized
app.use('/api/v1/', router);
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
  console.log(res);
}).catch(err =>{
  console.log(err);
});

export default app;
