import dotenv from 'dotenv';

dotenv.config();

const Portconfig = {
  port: process.env.PORT || 8888,
  env: process.env.NODE_ENV,

};

export default Portconfig;
