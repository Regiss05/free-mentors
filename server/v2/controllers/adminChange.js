import pool from '../config/dbConfig';
import {addMentorQuery, setMentorQuery} from '../models/queries';
import responseFormatter from '../helpers/responseFormatter';

const findUserId = (req, res) => {
  const {
    userId,
  } = req.params;
  const { bio, occupation, expertise} = req.body;
  if(!req.decoded.isAdmin) return responseFormatter(res,401,'Unauthorized token', undefined,true);
  pool.query(setMentorQuery([userId])).then(result => {
    if(result.rowCount > 0){
      pool.query(addMentorQuery([ bio, occupation, expertise, userId])).then(result2 => {
        if(result2.rowCount > 0)  return responseFormatter(res,200,'user account change to mentor',result2.rows[0],false);
        else{
           return responseFormatter(res,409,'account not changed');
        }
      })
    } else {
      return responseFormatter(res,409,'account not changed');
    }
  }).catch(err => {
    return responseFormatter(res,409,'account not changed');
  })
}
export default findUserId;