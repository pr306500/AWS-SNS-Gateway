'use strict';

module.exports = {

  "SignUp" : {
        "POST" : {
            "blank_value" : false,
            "elements" : {
                "mobileNumber" : ""
            },
            "mandatory_elements" : ["mobileNumber"]
        },
        "PUT" : {
            "blank_value" : false,
            "elements" : {
                "mobileNumber" : "",
                "name" : "",
                "password" : "",
                "otp":""
            },
            "mandatory_elements" : ["mobileNumber", "otp","name","password"]
        }
    },
  "Refresh":{

    "PATCH" : {
            "blank_value" : false,
            "elements" : {
                "mobileNumber" : ""
            },
            "mandatory_elements" : ["mobileNumber"]
        }
    }

}