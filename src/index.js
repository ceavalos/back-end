const express = require('express');
const cors = require('cors');
const app = express();
const morgan = require('morgan');


require('./database');

// settings
app.set('port', process.env.PORT || 4000)

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/api', require('./routes/index'));

app.listen(app.get('port'));
console.log('Server on port', app.get('port'));
