var app = require('./index');

var port = 3001;


var server = app.listen(port, function() {
    console.log(`server is online on port: ${port}`);
})