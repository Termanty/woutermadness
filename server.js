var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
app.set('port', (process.env.PORT || 3000));

app.use('/public', express.static(__dirname + '/public'));
app.use('/public/scripts', express.static(__dirname + '/node_modules'));
app.use('/app', express.static(__dirname + '/app'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

var mongoose = require('mongoose');

var ankka_user = require('./.devenv').USERNAME;
var ankka_pass = require('./.devenv').PASSWORD;
// var db_url = 'mongodb://localhost:27017/test;'
var db_url = 'mongodb://ds161475.mlab.com:61475/ankka'
console.log('Database URL: ' + db_url);
mongoose.connect(db_url, { user: ankka_user, pass: ankka_pass });

var db = mongoose.connection;
mongoose.Promise = global.Promise;

var pollSchema = mongoose.Schema({
    title: String,
    description: String,
    votes: [String]
});
var Poll = mongoose.model('Poll', pollSchema);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Connected to MongoDB');

    app.get('/Polls', function(req, res) {
        Poll.find({}, function(err, docs) {
            if(err) return console.error(err);
            res.json(docs);
        });
    });

    // all other routes are handled by Angular
    app.get('/*', function(req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });

    app.listen(app.get('port'), function() {
        console.log('MEAN app listening on port '+app.get('port'));
    });
});


