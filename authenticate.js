// Require client library and private key.
var runThis=require("./gee.js");
var ee = require('@google/earthengine');
var privateKey = require('./ee-syedhu987-d511816b69af.json');

var runAnalysis = function () {
    ee.initialize(null, null, function () {
        try {
            runThis();
            
        } catch (e) {
            console.error('Analysis error: ' + e);
        }
        // ... run analysis ...
    }, function (e) {
        console.error('Initialization error: ' + e);
    });
  
  };
ee.data.authenticateViaPrivateKey(privateKey, runAnalysis, function (e) {
    console.error('Authentication error: ' + e);
  });