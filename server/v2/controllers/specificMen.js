import {mentorObj} from '../models/mentor';
import responseFormatter from '../helpers/responseFormatter'
import specificmentorQuery from '../models/queries'
import config from '../config/dbConfig'

export function specifmentor(req, res){
  const {email, firstName, LastName} = req.params;

  const mentArray = [email, firstName, LastName];

  pool.query(specificmentorQuery([req.params.mentorId]))
  .then((result) => {
    if(result > 0){
      return responseFormatter(res,200,'user details', mentArray,false);
    }
  }).catch((err) => {
    return responseFormatter(res,404,'mentor not found', data, true);
  });
}
