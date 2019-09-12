import {mentorObj} from '../models/mentor';
import pool from '../config/dbConfig';
import {getMentorQuery} from '../models/queries';
import responseFormatter from '../helpers/responseFormatter';

export function mentors (req, res) {
    const {mentorId, firstName, lastName, email, address, bio, occupation, expertise} = req.body;
    
  
    pool.query(getMentorQuery())
    .then((result) => {
     return responseFormatter(res, 200, 'All mentors', result.rows, false);
    }).catch((err) => {
    
     return responseFormatter(res, 404, 'no mentor found', undefined, true);
       
    });
  }
  
  export default mentors;