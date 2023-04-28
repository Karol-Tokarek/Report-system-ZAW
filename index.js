const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
var cors = require('cors');
const app = express();
const port = 3001;
app.use(cors())

// konfiguracja połączenia z bazą danych
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'report-system'
});

// połączenie z bazą danych
connection.connect((err) => {
  if (err) throw err;
  console.log('Połączono z bazą danych!');
});

// parser dla danych przesyłanych w formacie JSON
  app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });

// endpoint dla zapisywania danych
app.post('/dataToForm', (req, res) => {
  const dane = req.body;
  var jsondata = JSON.stringify(dane);
 
    // console.log(dane);
  // zapytanie SQL w celu wstawienia danych do tabeli 'moja_tabela'
  const query = `INSERT INTO rt_submissions ( unit, surname, name, email, title,content) VALUES ('${dane.klasa}', '${dane.nazwisko}', '${dane.imie}', '${dane.email}', '${dane.tematMsg}', '${dane.opisSprawy}')`;

  // wykonanie zapytania do bazy danych
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log('Dane zostały zapisane!');
    res.sendStatus(200);
  });
});

// uruchomienie serwera
app.listen(port, () => {
  console.log(`Serwer uruchomiony na porcie ${port}`);
});