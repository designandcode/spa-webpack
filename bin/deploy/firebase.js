const shell = require('shelljs');
const prompt = require('prompt');
const firebase = require('firebase-tools');
const fs = require('fs');

require('dotenv').config();
const firebase_project = process.env.FIREBASE_PROJECT

let firebaserc = {
  "projects": {
    "default": firebase_project
  }
};

fs.writeFileSync('./.firebaserc', JSON.stringify(firebaserc))


prompt.start();
 
prompt.get({
  name: 'deploy',
	description: 'deploy to firebase',
	type: 'string',
	required: true,
	message: 'Deploy to firebase?'
}, function (err, result) {
  
	if ( /y(es)?/i.test(result.deploy) ) {
		console.log('Firebase deploy started');

		let login = 'firebase login --interactive && ';
		let deploy = 'firebase deploy';

		if (shell.exec(login+deploy).code !== 0) {
		  shell.echo('Error: deploy failed');
		  shell.exit(1);
		}
	} else {
		console.log('Firebase deploy cancelled');
	}
});
















