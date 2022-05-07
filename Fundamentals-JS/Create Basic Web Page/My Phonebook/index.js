const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const routing = require('./routing'); // имаме създаден някакъв модул, който е създаден от автора на проекта. Не е външна библиотека
const port = 3000;
const app = express();

app.engine(".hbs", handlebars({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, '/views'));
app.use(express.static('public')); // това ни позволява да зарежда всички файлове от папката public
app.use(bodyParser.urlencoded({
    extended: true
}));
routing(app);

app.listen(port, console.log("Listening on port " + port + "..."));