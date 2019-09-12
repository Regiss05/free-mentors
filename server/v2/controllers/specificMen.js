import pool from '../../v2/config/dbConfig'
import { getSpecificMentorQuery } from '../../v2/models/queries'
import responseFormatter from '../helpers/responseFormatter'

const findMenId = (req, res, next) => {
  const{
    mentorId,
  } = req.params;
  
  pool.query(getSpecificMentorQuery([mentorId])).then(result => {
    if(result.rowCount > 0) return responseFormatter(res,200,'mentor details',result.rows[0],false);
    else return responseFormatter(res,404,'mentor not found');
  }).catch(err => {
    return responseFormatter(res,404,'mentor not found');
  })
}

export default findMenId;