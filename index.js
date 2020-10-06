var express = require('express');
var bodyParser =  require('body-parser');
var cors  = require('cors');
var connection = require('./sql');
const e = require('express');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.status(200).json({state: 'success'});
});

app.get('/get-data', (req, res) => {
  const select = `SELECT * FROM words`;
  connection.query(select, (err, data) => {
    if (err) console.log('Unable to connect to sql: ' + err.message);
    else {
      res.status(200).json(data);
    }
  })
})

const server = app.listen(8100, () => {
  var host = server.address().address
  var port = server.address().port
  
  console.log("Example app listening at http://%s:%s", host, port)
})