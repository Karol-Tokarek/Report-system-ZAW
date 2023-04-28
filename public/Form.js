import React from 'react';
import '../App.css';
import {  useLocation } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import {useState} from 'react';
import { useForm } from 'react-hook-form'

function Form() {

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => { console.log(data) };
  // this.state = {value: 'Wartosc imienia'};
// this.handleChange =
// this.doChange.bind(target.value);
// this.handleSubmit =
// this.doSubmit.bind(target.value);

const loc = useLocation();
const { id } = useParams();
const { idx, unit, name } = useParams();
const [cnt, setCountER] = useState(0);
const [formType, setFormType] = useState('');
const [imie, setImie] = useState('');
const [nazwisko, setNazwisko] = useState('');
const [klasa, setKlasa] = useState('');

const handleFormTypeChange = (e) => {
  setFormType(e.target.value);
  
};

const handleFormSubmit = (e) => {

  e.preventDefault();
  const formData = new FormData(e.target);

  //console.log(formData);
};

let formContent = null;
   if (id === '2') {
    formContent = (
      <div>
        <label>Email:</label>
        <input type='text' value={formType.value}/>
      </div>
      
    );
  }

  if (id === '3') {
    formContent = (
      <div>
      <label>Email(inny niz zsegw.pl):</label>
      <input type='text' value={formType.value} />
    </div>
    );
  }
  if (id === '4') {
    formContent = (
      <div>
      <label>Tresc zaswiadczenia:</label><br />
      <textarea type='text' value={formType.value} />
    </div>
    );
  }

  if (id === '5') {
    formContent = (
      <div>
      <label>Srednia:</label><br />
      <input type='number' min="1" max="6" value={formType.value} />
    </div>
    );
  }

  if (id === '6') {
    formContent = (
      <div>
      <label>  temat wiadomości
</label>
<input type='text' value={formType.value} />
<br />

<label> 
pole opisu sprawy [TEXTAREA]
:</label>
<textarea type='text' value={formType.value}/>
<br />

<label>  
pole załącznika [FILE]:</label>
<input type='file' value={formType.value} />
<br />
    </div>
    );
  }




  return (
    <div className='Form'>
      <header className='App-header'>
        {/* <p>com.Form</p>
        <p>Case ID: {id}</p>
        <p>Case URL: {loc.pathname}</p>
        <p>
          Test params: {idx} Klasa {unit} Name {name}
        </p>
        <p>Proba przeslania from: {cnt}</p> */}
        
        <form method='post' action='' onSubmit={handleFormSubmit}>
          <label>Imie</label>
          <input type='text' value={imie} onChange={(e) => setImie(e.target.value)}/>
          <br />
          <br />
          <label>Nazwisko</label>
          <input type='text' value={nazwisko} onChange={(e) => setNazwisko(e.target.value)}/>
          <br />
          <br />
          <label>Klasa</label>
          <select value={klasa} onChange={(e) => setKlasa(e.target.value)}>
            <option value='4PT5'>4PT5</option>
            <option value='4DT5'>4DT5</option>
            <option value='4ET5'>4ET5</option>
          </select><br /><br />
          {formContent}<br />
          <button type='submit' value='wyslij !'>Wyslij</button>

        </form>
        {/* <button onClick={() => setCountER(cnt + 1)}>+</button> */}
      </header>
    </div>
  );
}

export default Form;