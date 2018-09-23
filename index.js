const express = require('express')
const app = express();

//express middleware
//accept json or json.stringify() automatically
require('./middleware')(app)

//connect mlab
require('./database')

//routing
require('./route')(app)


//port number could be anything
app.listen(5000, () => console.log('listening to port 5000'))
