const express = require ('express');
const path = require('path');
//const exphbs = require('express-handlebars');
const {engine} = require('express-handlebars');
const logger = require('./middleware/logger');
const app = express();

//Init Middleware
//app.use(logger);

//Handlebars middleware
//app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static("public/images"))

//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}))

app.get('/', (req, res) => res.render('index', {
    title: 'Odometry',
}));

const { application } = require('express');



//Set static folder
app.use(express.static(path.join(__dirname, 'public')));
//Members API route
app.use('/api/odometry', require ('./routes/api/odometry'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server started on port ${PORT}'));