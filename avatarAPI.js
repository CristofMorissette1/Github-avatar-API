var request = require('request');
var secret = require('./secret.js')
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
  


getRepoContributors("jquery", "jquery", function(err, result) {
    console.log("Errors:", err);
    console.log("Result:", result);
  });

