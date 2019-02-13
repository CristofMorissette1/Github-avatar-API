var request = require('request');
var secrets = require('./secret');
var fs = require('fs');
var repoOwner = process.argv[2];
var repoName = process.argv[3];

console.log('Welcome to the GitHub Avatar Downloader!');

request.get('https://api.github.com/repos/jquery/jquery/contributors')



function getRepoContributors(repoOwner, repoName, cb) {
    var options = {
    
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
        'User-Agent': secrets
    }
 };
    request(options, function(err, res, body) {
        cb(err, body);
    });
  }

  function downloadImageByURL(url, filePath) {
    // ...request url and write to file path
    request.get(url)
    .pipe(fs.createWriteStream(filePath));
  }

  getRepoContributors("jquery", "jquery", function(err, result) {
    var obj = JSON.parse(result);
    obj.forEach(element => {
        // console.log(element.login, element.avatar_url);
        downloadImageByURL(element.avatar_url, `avatars/${element.login}.jpeg`); 
    });
    // console.log("Errors:", err);
    // console.log("Result:", result);
    
  });