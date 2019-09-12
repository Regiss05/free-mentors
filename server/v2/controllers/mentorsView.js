import {mentorObj} from '../models/mentor';
import pool from '../config/dbConfig';
import {getMentorQuery} from '../models/queries';
import responseFormatter from '../helpers/responseFormatter';
import helper from '../helpers/generalheper';


export function mentors (req, res) {
    const {mentorId, firstName,lastName, email, address, bio, occupation, expertise} = req.body;
    
  
    pool.query(getMentorQuery())
    .then(({rows}) => {
      delete rows[0].password;
      rows = helper.removeDataToHide(rows, ["password"]);
     return responseFormatter(res, 200, 'All mentors', rows, false);
    }).catch((err) => {
    console.log(err.message);
     return responseFormatter(res, 404, 'no mentor found', err.message, true);
       
    });
  }
  
  export default mentors;
