import {mentorObj} from '../models/mentor';
import responseFormatter from '../helpers/responseFormatter'
import queries from '../models/queries'

const findMenId = (req, res, next) => {
  const{
    mentorId,
  } = req.params;
  
  let menId = mentorObj.findIndex(m => m.mentorId.toString() === mentorId);
  
  if(menId < 0){
    return responseFormatter(res,404,'mentor not found',true)
  }

  if(menId >= 0){
    return responseFormatter(res,200,'mentor details',false,
     {
       data:mentorObj[menId],
     }
    )
  }
  next();
}

export default findMenId;