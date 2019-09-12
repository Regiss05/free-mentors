import responseFormatter  from '../helpers/responseFormatter';

const checkData = (req, res, next) => {
  const {
    firstName, 
    lastName, 
    email,  
    password, 
  } = req.body;
    
  if(firstName && lastName && email && password){
    next();
  } else responseFormatter(res,404,'send all required data', undefined ,true)
}

export default checkData;