var app = require('./server-config.js');

// var port = 4568;

app.listen(process.env.PORT || 4568);        

console.log('Server now listening on port, BITCH ' + (process.env.PORT || 4568));
