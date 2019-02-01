const AWS = require('aws-sdk');

class SendNotification{

    constructor(){
       AWS.config.update({
       	region: 'us-east-1',
       	accessKeyId: "AKIAIXDICQZB7LPLF2DA",
        secretAccessKey: "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"
       });
    }
    
  sendOtpFirstTime(otp,userInfo){
   let params = {
   	 Message: `Welcome to Panditiji, enter the otp ${otp}`,
     PhoneNumber: userInfo['mobileNumber']
     };  
    return new AWS.SNS({apiVersion: '2010-03-31'}).publish(params).promise();  
  }  

}


module.exports = new SendNotification();