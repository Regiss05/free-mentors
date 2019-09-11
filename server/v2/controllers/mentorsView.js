import {mentorObj} from '../models/mentor';
import pool from '../config/dbConfig';
import {getMentorQuery} from '../models/queries';
import responseFormatter from '../helpers/responseFormatter';

export function mentors (req, res) {
    const {mentorId, firstName, lastName, email, address, bio, occupation, expertise} = req.body;
    
    const ments=[mentorId, firstName, lastName, email, address, bio, occupation, expertise];

    pool.query(getMentorQuery(ments))
    .then((result) => {
        if(result > 0){
            return responseFormatter(res, 201, 'All mentors', ments, false);
        }
    }).catch((err) => {
        if(res <= 0){
            return responseFormatter(res, 404, 'no mentor found', data, true);
        }
    });
  }
  
  export default mentors;