var express = require('express')
  , router = express.Router()
  
var  _dataServices = require('../orgDataServices.js');
var _surveyData = require('../surveyDataServices.js');
  var jsonfile = require('jsonfile')
  var surveyFile ="./surveySettings.json";
 


var orgs;

  _dataServices.getAllOrgs(null, function(orgsMap){
	  orgs =orgsMap;
  },
  function(e)
  {
	  console.log(e);
  });

router.get('/', function (req, res) {
    var surveySet = jsonfile.readFileSync(surveyFile);
    
    _surveyData.getAllQuestions(null, function(questionMap){
        if(Object.keys(questionMap).length <= surveySet.num) {
            res.send(questionMap);
        } else {
            var qmap2 =[];
            for(var i = 0; i< surveySet.num; i++) {
                qmap2.push(questionMap[Object.keys(questionMap)[i]]);
            }
            res.send(qmap2);
        }
        
       
        
    }, function(e){
        console.log("get in get"+e);
    });
});

router.post("/", function (req, res) {
   var x =[];
   for (var i =0; i< Object.keys(req.body).length; i++) {
       if (req.body[Object.keys(req.body)[i]]){
           x.push(Object.keys(req.body)[i])
       }
   }
   var orgs = matchOrgs(x, function(orgs) {
       res.send(orgs);
   });
});

function matchOrgs(ids, callback) {
   getQuestionsTagsByIds(ids, function (tags) {
       //console.log(tags);
       getOrgsMatchingTags(tags, function(orgs) {
           callback(orgs);
       });
   });
}

function getQuestionsTagsByIds(ids, callback) {
   _surveyData.getQuestionsTagsByIds(ids, function(tags){
       callback(tags);
   });
}

function getOrgsMatchingTags(tags, callback) {
   _dataServices.getOrgsMatchingTags(tags, function(orgs) {
       callback(orgs);
   });
}





module.exports = router;
