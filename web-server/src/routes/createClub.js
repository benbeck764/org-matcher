var express = require('express')
  , router = express.Router()
var  _dataServices = require('../orgDataServices.js');
  
router.get('/', function (req, res) {
	var data = { title: "Create a club entry" }
	res.send(data);
});

router.post("/", function (req, res) {
	console.log("post");
	var org = req.body.club;
	if (org.tags.indexOf(',') != -1) {	//Tags separated by commas? If no, only one tag
		org.tags = org.tags.split(',');
		for (var i = 0; i < org.tags.length; i++) {
			org.tags[i] = org.tags[i].trim();
			// if (org.tags[i].indexOf(' ') == 0) {	//Tags likely begin with a single space after being split
			// 	org.tags[i] = org.tags[i].substring(1);	// remove the space
			// }
		}
	} else {
		org.tags = [org.tags];
	}


	if (org.links.indexOf(',') != -1) {	//Tags separated by commas? If no, only one tag
		org.links = org.links.split(',');
		for (var i = 0; i < org.links.length; i++) {

			org.links[i] = org.links[i].trim();
			if(org.links[i].indexOf("http") != 0) {
				org.links[i]="http://"+org.links[i];
			}
			// if (org.links[i].indexOf(' ') == 0) {	//Tags likely begin with a single space after being split
			// 	org.links[i] = org.links[i].substring(1);	// remove the space
			// }
		}
	} else {
		org.tags = [org.tags];
		if(org.links[0].indexOf("http") != 0) {
			org.links[0]="http://"+org.links[i];
		}
	}


	_dataServices.addStudentOrg(org, function(err) {
		console.log(err);
	});

	res.sendStatus(200);
});

module.exports = router;
