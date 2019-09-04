// imported packages and codes
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import router from './server/v1/routes/route';
import Portconfig from './server/v1/config/PortConfig';

const app = express();
// eslint-disable-next-line camelcase

// port configuration imported
const { port } = Portconfig;

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// API Routes initialized
app.use('/api/v1/', router);


// Home page route

// eslint-disable-next-line consistent-return
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
  // eslint-disable-next-line no-console
  console.log(`Server now listening at localhost:${port}`);
});

export default app;
