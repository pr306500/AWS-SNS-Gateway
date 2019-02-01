var MongoClient = require('mongodb').MongoClient;

class Crud{

  constructor(){
  	var url = "mongodb://127.0.0.1:27017/";
    var dbInst = this
	MongoClient.connect(url, function(err, db) {
        if(err){
           global.error('Err occured while making conn with DB',err);
        }else{  
            dbInst._db = db.db("apigateway");
        }
	  })
  }

  validateUserExists(userInf){
      
     return new Promise((resolve, reject)=>{

       this._db.collection("customer").findOne({"mobileNumber":userInf.mobileNumber},(err, resp)=>{
           //console.log('@@@@@',err, resp);
           if(!err){
              resolve(resp);
           }else{
              reject(err);
           }
       })

     })

  }

  registerUser(userInf){
     return new Promise((resolve, reject)=>{
       this._db.collection("customer").insertOne(userInf,(err, resp)=>{
           if(!err){
              resolve(resp);
           }else{
              reject(err);
           }
       })
     })
  }

  registerUserWithOtp(info){
    return new Promise((res, rej)=>{
      this._db.collection("otpInfo").insertOne(info,(err, recrd)=>{
          if(!err){
            return res()
          }else{
            rej(err);
          }
      })
    })
  }
  
  validateAndRemoveTempOtp(info){
    return new Promise((res, rej)=>{
      this._db.collection("otpInfo").deleteOne({"otp":info['otp']},(err, recrd)=>{
         // console.log('$$$$',recrd);
          if(!err && recrd){
            return res(true)
          }
          else if(!err && !recrd){
            return res(false)
          }
          else{
            rej(err);
          }
      })
    })
  }

  removeTempOtp(otp){
    return new Promise((res, rej)=>{
     this._db.collection("otpInfo").remove({"otp":otp},(err,result)=>{
        if(!err){
           res(true)
        }else{
           rej(err)
        }
     })

    })
  }

 updateGeneratedOtp(inf){

  return new Promise((res, rej)=>{
     
     this._db.collection('otpInfo').update({"mobileNumber":inf['mobileNumber']},inf,(err, data)=>{
         //console.log(Object.keys(data));
         if(!err){
           return res(data);
         }else{
           return rej(err);
         }
     })

  })

 }


}

module.exports = new Crud();