import '../App.css';
import React, { useState, useEffect } from 'react';
import importt from '../import.jpg';
import kom1 from '../kom1.jpg';
import kom2 from '../kom2.jpg';


function Help() {

  return (
    <div>
        <header class="App-header">
      <h4> STRONA POMOCY || Q&A</h4>
      </header>
      <article>
      <ol>
      <li><b>Podaj typ/specyfikę aplikacji React. Jakie są wymagania, aby móc połączyć się z Bazą
      danych lub wysyłać wiadomości pocztą e-mail?</b></li>
      <p>W kontekście aplikacji React, sama biblioteka nie ma bezpośredniego dostępu do bazy danych ani nie posiada wbudowanych 
        funkcjonalności do wysyłania wiadomości e-mail. Aby móc korzystać z tych 
        funkcjonalności, konieczne jest skorzystanie z zaplecza backendowego.
Wymagania techniczne dla takiego backendu zależą od konkretnej bazy danych lub usługi wysyłającej e-maile,
 którą chcemy użyć. Jednak w większości przypadków, konieczne będzie zainstalowanie i konfiguracja odpowiedniego
  oprogramowania, np. bazy danych MySQL lub MongoDB, 
oraz napisanie API w Node.js, które będzie obsługiwać żądania wysyłane z aplikacji React. <br/><br/> Aby wysyłać maile / wysyłać / odbierać dane z bazy danych potrzebny będzie taki kod jak w punkcie 4

      </p>
      <li><b>Opisz dostępne metody dla systemu pocztowego w React.</b></li>
      <p>
<ul>
<li><b>Użycie SMTP</b></li>
Simple Mail Transfer Protocol (SMTP) to technologia wysyłania wiadomości e-mail przez sieć 
i jest najpowszechniejszą metodą wysyłania maili. 
jest to usługa przekazywania do wysyłania wiadomości e-mail z jednego serwera na drugi.
Gdy wysyłasz wiadomość e-mail do znajomego za pomocą klienta poczty e-mail, 
takiego jak Gmail, serwer poczty wychodzącej (SMTP) odbiera ją i łączy z serwerem odbierającym znajomego.
 Dwa serwery komunikują się zgodnie z wytycznymi określonymi przez protokół SMTP, określającymi, 
 kto jest odbiorcą iw jaki sposób mogą odbierać pocztę przychodzącą. 
Klienci poczty e-mail zwykle mają powiązany z nimi serwer SMTP, który pomaga w dostarczaniu wiadomości e-mail
<li><b>Wykorzystanie API poczty transakcyjnej (wirtualnej)</b></li>
Usługi poczty transakcyjnej pozwalają na wysyłanie wiadomości e-mail z Twojej aplikacji, 
korzystając z hostowanego (np wykupionego) API. Zamiast samodzielnie zarządzać serwerami poczty i ich wlasciwosciami, 
możesz wykorzystać API poczty e-mail do obsługi składania wiadomości, wysyłki i dostarczania.
 Takie api jest przydatne, gdy potrzebujesz niezawodnej usługi, która może być szybko zintegrowana, o
 bsługuje wysyłanie dużej liczby wiadomości i oferuje wiele różnorodnych funkcjonalności.
<li><b>Wykorzystanie usługi wielokanałowych powiadomień</b></li>
Usługi wielokanałowych powiadomień, takie jak Courier, pozwalają na dotarcie do użytkowników na różnych płaszczyznach (np. sms itp) za
 pomocą jednego API. Zwykle pozwalają na korzystanie z własnego serwera; w przypadku e-maila 
 może to być własny serwer SMTP lub hostowane API poczty transakcyjnej.

Dzięki usłudze wielokanałowych powiadomień możesz łatwo dodawać kolejne rodzaje powiadomień na innych płaszczyznach lub nawet zmienić dostawcę usługi e-mail,
 nie musząc zmieniać kodu. Jeśli chciałbyś poinformować użytkowników o różnych sprawach, za pomocą e-maila, SMS, push lub
  aplikacji do czatowania takich jak Slack i WhatsApp, możesz to zrobić za jednym zamachem, tylko jednym API.

  <li>***oraz możemy także wybrać różną implementację np. użycie biblioteki nodemailer, użycie usługi zewnętrznej typu SendGrid itp. (interfejs API), lub uzycie gotowych komponentów np. react-email-editor pozwalające wysyłać z poziomu aplikacji.</li>

</ul>
</p>
      <li><b> Porównaj metody i podaj ich wady i zalety.</b></li>
      <table>
  <thead>
    <tr>
      <th>Metoda</th>
      <th>Zalety</th>
      <th>Wady</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SMTP</td>
      <td>
        <ul>
          <li>Łatwość wdrożenia i użycia</li>
          <li>Powszechność i wsparcie w większości aplikacji pocztowych</li>
          <li>Możliwość dostosowania do własnych potrzeb poprzez konfigurację serwera SMTP</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Ryzyko blokowania przez serwery pocztowe z powodu zbyt dużej ilości wysyłanych wiadomości lub podejrzenia spamu</li>
          <li>Ryzyko blokowania przez firewall lub filtr antyspamowy na serwerze lub u odbiorcy</li>
          <li>Brak gwarancji dostarczenia wiadomości lub informacji zwrotnej, czy została dostarczona</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>API poczty transakcyjnej</td>
      <td>
        <ul>
          <li>Niezawodność i skalowalność usługi</li>
          <li>Dostępność za pośrednictwem hostowanego API</li>
          <li>Możliwość personalizacji i dostosowania do własnych potrzeb</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Wymaga integracji z zewnętrzną usługą, co może być czasochłonne i kosztowne</li>
          <li>Koszty, szczególnie przy większej liczbie wysyłanych wiadomości</li>
          <li>Możliwe problemy związane z przetwarzaniem danych osobowych (np. GDPR)</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Usługa multichannel notification</td>
      <td>
        <ul>
          <li>Możliwość dotarcia do użytkowników za pomocą różnych kanałów komunikacji</li>
          <li>Jedno API do zarządzania wieloma kanałami komunikacji</li>
          <li>Możliwość łatwej zmiany dostawcy usługi e-mail lub innych kanałów komunikacji</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Wymaga integracji z zewnętrzną usługą</li>
          <li>Dodatkowe koszty, szczególnie przy większej liczbie wysyłanych wiadomości lub korzystaniu z większej liczby kanałów komunikacji</li>
          <li>Możliwe problemy związane z przetwarzaniem danych osobowych (np. GDPR)</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>


      <li><b> Przygotuj skrypt instalacyjny/wdrożeniowy wraz z instrukcją wdrożenia dla opracowanej
przez siebie aplikacji Report-tool.</b></li>
      <ol>
      <li> Rozpakuj pobrany plik zip z projektem react. (tam też znajduje się folder z serwerem/ami node)</li>
      <li> Zaimportuj bazę danych do localhost/phpmyadmin</li>
      <figure>
      <img src={importt} alt="import bazy" width="400px"/>
      <figcaption>Import bazy danych na localhost/phpmyadmin</figcaption>
</figure>
      <li> Uruchom aplikację React. Wejdź w katalog rep-sys i wpisz w terminalu 'npm start' </li>
      <figure>
      <img src={kom1} alt="kom1" width="400px"/>
      <figcaption>Komenda nr1</figcaption>
</figure>
      <li> Uruchom aplikację Node.js. Wejdź w katalog Node-connmysql-to-react i wpisz w terminalu 'node serverEmail.js' jeśli chcesz wysyłać maile oraz 'node index.js', jeśli chcesz wrzucać dane do bazy danych. </li>
      <figure>
      <img src={kom2} alt="kom2" width="400px"/>
      <figcaption>Komenda nr2</figcaption>
</figure>
      <li> Pod localhost:3000 znajdziesz swoją aplikację react (wpisz w przeglądarkę)</li>
      <li> Wyślij dane do bazy (1-6 pkt. na stronie głównej) lub wyślij email (7 pkt)</li>
      
      </ol>



      </ol>
      <ul>
        <li> Kod odpowiedzialny za "serwer" mailowy</li>
      <code>{`const express = require('express'); \n
const sendEmail = require('./email.js');\n
var cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
    });
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/emailSend', (req, res) => {
  const { emailNadawcy, emailOdbiorcy, tresc } = req.body;
  sendEmail("karolexigierus@gmail.com",emailOdbiorcy, tresc);
  res.send('Email sent successfully');
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});"`}  </code>
<hr/><br/>
        <li> Kod odpowiedzialny za mini moduł do tego serwera używając nodemailera</li>
        <code>{`const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'karolexigierus@gmail.com',
    pass: 'hlsbcraqwkkysjym',
  },
  secure: true,
});

const sendEmail = (emailNadawcy, emailOdbiorcy, tresc) => {
  const mailOptions = {
    from: emailNadawcy,
    to: emailOdbiorcy,
    subject: 'Message from React ApPPPP',
    text: tresc,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Email sent.');
    }
  });
};

module.exports = sendEmail;`}</code>
<hr/><br/>
<li> Kod backendu bazodanowego: </li>
<code> {` const express = require('express');
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
  const query = 'INSERT INTO rt_submissions ( unit, surname, name, email, title,content) VALUES ..... itp. do zobaczenia w plikach

  // wykonanie zapytania do bazy danych
  connection.query(query, (err, result) => {
    if (err) throw err;
    console.log('Dane zostały zapisane!');
    res.sendStatus(200);
  });
});

// uruchomienie serwera
app.listen(port, () => {
  console.log('Serwer uruchomiony.');
});`}</code>
</ul>
      </article>

    </div>
  );
}

export default Help;