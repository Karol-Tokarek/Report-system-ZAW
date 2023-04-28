import React from 'react';
import logo from '../banner.png';
import '../App.css';

// import Form from "Form.js";
// import Help from "Help.js";
// import Main from "Main.js";

let tasks = require('../tasks.json');
function Main() {

  return (
    <div className="Main">
      
  

    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      {/* <p>
        Edit <code>src/App.js</code> and save to reload.
      </p> */}
      <h2> System zgłoszeń spraw uczniowskich</h2>
      <ol id="tasks">
        {/* {listTasks()} */}
        {
           Object.keys(tasks).map( (key, i)=>{
            
              // return <li><a href={'#'+ String(key)}>{tasks[key]}</a></li>;
           return <li><a href={`/form/${i+1}`}>{tasks[key]}</a></li>
           })};
        
        {/* <li>Uzyskać legitymację drukowaną</li>
        <li>Uzyskać kod do MLegitymacji</li>
        <li>Zresetować hasło do konta Microsoft</li>
        <li>Zaświadczenie z sekretariatu</li>
        <li>Złożyć wniosek o stypendium</li> */}
        <li><a href="email">SKONTAKTUJ SIĘ Z NAMI PRZEZ EMAIL</a></li>
      </ol>
      <a
        className="App-link"
        href="/help"
        rel="noopener noreferrer"
      >
        UZYSKAJ POMOC (PYTANIA I ODPOWIEDZI)
      </a>
    </header>
    <section class='panel'>



     </section> 
  </div>
  );
}

export default Main;