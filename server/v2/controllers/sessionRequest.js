import pool from '../config/dbConfig';
import {addSession, getCurrentSession} from '../models/queries';
import responseFormatter from '../helpers/responseFormatter';

const findInfo = (req, res) => {

  const {
    mentorid, questions
  } = req.body;

pool.query(getCurrentSession([req.decoded.email])).then(resu => {
  if(resu.rowCount < 1){

  pool.query(addSession([mentorid, req.decoded.email, questions, 'created'])).then(result => {
    if(result.rowCount > 0) return responseFormatter(res,200,'mentorship created',result.rows[0],false);
    else  return responseFormatter(res,400,'mentorship not created',undefined,true);
  }).catch(err => {
    return responseFormatter(res,400,'mentorship not created',undefined,true);
  })
} else {
  return responseFormatter(res,403,'You have an ongoing session',undefined,true);
}})
}

export default findInfo;