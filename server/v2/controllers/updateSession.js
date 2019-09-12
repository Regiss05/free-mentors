import pool from '../../v2/config/dbConfig'
import { updateSession } from '../../v2/models/queries'
import responseFormatter from '../helpers/responseFormatter'

function updateSessionF(req, res, state){
  const {sessionId} = req.params;
  pool.query(updateSession([state, sessionId])).then(result =>{
    return responseFormatter(res,200,'session created', result.rows, false);  
  }).catch(err => {
    return responseFormatter(res,404,'session error',undefined, true);
  })
    
}

export function acceptSession(req, res){
  updateSessionF(req, res, 'accepted');
}
export function rejectSession(req, res){
  updateSessionF(req, res, 'rejected');
}
