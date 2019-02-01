const otpGenerator = require('otp-generator'),
      express = require('express'),
      router = express.Router(),
      dbConn = require('../models/crud.js'),
      AwsService = require('./gateway-aws.js');

router.post('/',(req, res)=>{
 try{
     
     let method = req.method,
       schemaValidation = global.payloadConfig['SignUp'],
       otp;
   let validation = global.validator.paramsValidator(req.body,schemaValidation[method].elements,schemaValidation[method].mandatory_elements, schemaValidation[method].blank_value);
       if (!validation.success){
        return res.status(global.config.process_error_http_code).json({ "responseCode": global.config.default_error_code, "responseDesc": validation.response.errorMsg });
       }else{
         dbConn.validateUserExists(req.body).then((isRegistered)=>{
            if(!isRegistered){
               otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
              return AwsService.sendOtpFirstTime(otp,req.body);
            }else{
              return false;
            }
         })
         .then((otpTrigg)=>{
            if(otpTrigg){
              let obj = {
                'otp':otp,
                'reqId':otpTrigg['ResponseMetadata']['RequestId'],
                'messId':otpTrigg['MessageId'],
                'mobileNumber':req.body['mobileNumber']
              };
              let p1 =  dbConn.registerUserWithOtp(obj);
              //let p2 =  dbConn.registerUser(req.body);
              return Promise.all([p1]);
            }
         })
         .then((result)=>{
            if(!result){
              res.send('Number already registered');
            }else{
              return res.send('OTP Send Successfully');
            }
         })
         .catch((err)=>{
           //console.log('Byeeee',err)
           return res.send('Found Error',err);
         })
       } 

 }catch(e){
    global.logger.error(`Error occured at ${__dirname} - line 19 - ${e}`);
 }	     
});

router.put('/',(req, res)=>{
let method = req.method,
    schemaValidation = global.payloadConfig['SignUp'];
let validation = global.validator.paramsValidator(req.body,schemaValidation[method].elements,schemaValidation[method].mandatory_elements, schemaValidation[method].blank_value);
       if (!validation.success){
        return res.status(global.config.process_error_http_code).json({ "responseCode": global.config.default_error_code, "responseDesc": validation.response.errorMsg });
       }else{
         let p1 = dbConn.validateAndRemoveTempOtp(req.body);
         let p2 = dbConn.registerUser(req.body);
         Promise.all([p1,p2]).then((recrd)=>{
            if(recrd){
              return res.send('Welcome User');
            }
         })
         .catch((err)=>{
             global.logger.error(`Error occured at ${__dirname} - line 71 - ${err}`);
             return res.send('Something went Wrog',err)
         })
       }
});

router.patch('/',(req, res)=>{
  
  let method = req.method,
      otp;
      schemaValidation = global.payloadConfig['Refresh'];
      console.log('%%%',schemaValidation)
      let validation = global.validator.paramsValidator(req.body,schemaValidation[method].elements,schemaValidation[method].mandatory_elements, schemaValidation[method].blank_value);
      if(!validation){
        return res.status(global.config.process_error_http_code).json({ "responseCode": global.config.default_error_code, "responseDesc": validation.response.errorMsg });
      }else{
        otp = otpGenerator.generate(6, { upperCase: false, specialChars: false });
         AwsService.sendOtpFirstTime(otp,req.body).then((otpTrigg)=>{

            let obj = {
                'otp':otp,
                'reqId':otpTrigg['ResponseMetadata']['RequestId'],
                'messId':otpTrigg['MessageId'],
                'mobileNumber':req.body['mobileNumber']
              };
              return dbConn.updateGeneratedOtp(obj)
         })
         .then((data)=>{
            if(data){
              return res.send('Successfully Send New Otp')
            }
         })
      }
})

module.exports = router;

