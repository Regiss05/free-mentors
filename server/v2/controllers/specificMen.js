import pool  from '../config/dbConfig';
import responseFormatter from '../helpers/responseFormatter'
import {specificmentorQuery} from '../models/queries'
import config from '../config/dbConfig'

export default function specifmentor(req, res){
  const {mentorId} = req.params;

  pool.query(specificmentorQuery([mentorId]))
  .then((result) => {
    if(result.rowCount > 0){
      delete result.rows[0].password;
      return responseFormatter(res,200,'user details', result.rows[0],false);
    } else {
      return responseFormatter(res,404,'mentor not found', undefined, true);
    }
  }).catch((err) => {
    return responseFormatter(res,404,'mentor not found', undefined, true);
  });
}
