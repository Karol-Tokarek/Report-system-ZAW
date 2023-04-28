const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'report-system',
});

connection.connect( function(err){
	if(!!err){
		console.log('Error')
	} else {
		console.log('Connect')
	}
})

function put(){
	let data = { id:0, name:'Jakiś tytuł', desc:'Trele Morele.net'}
	connection.query("INSERT INTO documents SET ?", data, (err,res)=>{
		console.log(err);
		console.log(res);
	})
}
console.log('Query end')

app.listen(3001, () => {
  console.log('Server is listening on port 3001');
});