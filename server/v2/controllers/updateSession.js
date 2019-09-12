import {updateSession} from '../models/queries';
import pool from '../config/dbConfig';
import responseFormatter  from '../helpers/responseFormatter';

function updateSessionF(req, res, state){
  const {sessionId} = req.params;

  pool.query(updateSession([state, sessionId])).then(result => {
    if(result.rowCount > 0){
      return responseFormatter(res,200,'session accepted',result.rows[0], false);
    } else {
      return responseFormatter(res,404,'session error',true);
    }
  }).catch(err => {
    return responseFormatter(res,404,'session error',true);
  });
}

export function acceptSession(req, res){
  updateSessionF(req, res, 'accepted');
}
export function rejectSession(req, res){
  updateSessionF(req, res, 'rejected');
}
