var request = require('request');
var secret = require('./secret.js')
var fs = require('fs');
console.log('Welcome to Avatar API');

request.get('https://api.github.com/repos/jquery/jquery/contributors');


function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
        url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
        headers: {
          'User-Agent': 'request'
        }
      };
    
    request(options, function(err, res, body) {
        cb(err, JSON.parse(body));
    });
  }
  
   function downloadImageByURL(url, filePath) {

     request.get(url)
     .pipe(fs.createWriteStream(filePath));
 }
 downloadImageByURL('https://avatars2.githubusercontent.com/u/2741?v=3&s=466', "./test.png");

getRepoContributors("jquery", "jquery", function(err, result) {
    result.forEach( function(element) {
      console.log(element);
    })
     console.log("Errors:", err);
     console.log("Result:", result);
  });

 