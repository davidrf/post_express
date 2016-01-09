var express = require('express'),
    engines = require('consolidate'),
    app = express();

app.engine('html', engines.nunjucks);
app.set('view engine', 'html');
app.set('views', __dirname + 'views');

function errorHandler(err, req, res, next) {
  console.error(err.message);
  console.error(err.stack);
  res.status(500);
  res.render('error_template', { error: err });
}

app.get('/', function(req, res, next) {
  res.render('fruitPicker');
});

app.post('/', function(req, res, next) {
  var fruit = req.params.fruit;
  res.send('Your favorite fruit is %s', fruit);
});

app.use(errorHandler);

var server = app.listen(3000, function() {
  var port = server.address().port;
  console.log('Express server listening on port %s', port);
});

