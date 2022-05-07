const express = require('express');
const path = require('path');
const exphbs = require('express=handlebars')
const logger = require('../middleware/logger')


const app = express();

// init middle
// app.use(logger);

// Handlebars Middleware
app.engine('handlebars', exhphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars')

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

// Static folder
app.use(express.static(path.join(__dirname, 'source')));

// offices api route
app.use('/api/office', require('../routers/api/offices')); 

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => (console.log (`Server is running on http://localhost:${PORT}`)));