var express = require("express");
var app = express();
var port = process.env.PORT || 5000;

app.use(express.static("site"));

app.listen(port, function() {
    console.log("Express server listening on port %d in %s mode", port, app.settings.env);    
});