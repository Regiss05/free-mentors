const responseFormatter = (res, status, message, data, error) => {
    if(error){
      return res.status(status).json({
        status,
        message
      })
    }else{
        return res.status(status).json({
          status,
          message,
          data,
        })
      }
  };

  

  export default responseFormatter;
  