/* jshint node: true */
/* jshint esnext: true */
'use strict';
const express = require('express'),
      router = express.Router()

router.use('/kaktwan/panditji/signup', require('./SignUp'));

router.use('/kaktwan/panditji/signup/otp', require('./SignUp'));

router.use('/kaktwan/panditji/resend', require('./SignUp'));



module.exports = router;