const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const session = require('express-session');

const app = express();


//MIDDLEWARE
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: 'My secret key', resave: false, saveUninitialized: false }))


//HANDLEBARS
app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))
app.set('view engine', '.hbs')


//INITIALIZE ROUTER
app.use('/', require('./routes/translate'))

app.listen(3000, () => {
    console.log('server running on port 3000..');
})
