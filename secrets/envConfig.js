const env = require('./env.json');

module.exports = {
	'environmentName':env.environment || 'local',
	'local':{
		"protocol": "http://",
		"subDomain": "",
		"domain": "localhost",
		"domainBasePath": "/pujahouse",
		"notificationEndpoint": "/signup",
		"signUpService": {
			"aws": true
		},
		"awsSnsCredentials": {
			'access_token':'AKIAIXDICQZB7LPLF2DA',
			'secret_key':'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'
		},
		"appSSL": {
			"enabled": false,
			"cert": "",
			"key": ""
		}
	}
}