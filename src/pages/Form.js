import React from 'react';
import '../App.css';
import logo from '../banner.png';
import {  useLocation } from 'react-router-dom';
import {  useParams } from 'react-router-dom';
import {useState} from 'react';
import { useForm } from 'react-hook-form'
import { useFormik } from 'formik';
import { saveAs } from 'file-saver';
// import SaveButton from './SaveFile';
import axios from 'axios';
function Form() {
  const handleSaveClick = () => {
    const data = formik.values;
    const json = JSON.stringify(data);
    const fileName = 'file.json';
    // const fileName2 = '../public/file.json';

    const filePath = `/${fileName}`;
  
    const a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([json], {type: 'application/json'}));
    a.download = fileName;
    a.click();
    // const file = new Blob([json], { type: 'application/json' });
    // saveAs(file, fileName2);
  };
  // const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => { console.log(data) };
  const formik = useFormik({
    initialValues: {
      imie: '',
      nazwisko: '',
      klasa: '4PT5',
      email: '',
      emailInny: '',
      trescZaswiadczenia: '',
      srednia: '',
      opisSprawy: '',
      file:'',
      tematMsg: '',

    },
    onSubmit: values => {

      console.log(values);
      fetch('http://localhost:3001/dataToForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          imie: formik.values.imie,
          nazwisko: formik.values.nazwisko,
          klasa: formik.values.klasa,
          email: formik.values.email,
          emailInny: formik.values.email,
          trescZaswiadczenia: formik.values.trescZaswiadczenia,
          srednia: formik.values.srednia,
          opisSprawy: formik.values.opisSprawy,
          file: formik.values.file,
          tematMsg: formik.values.tematMsg,

        })
      })
        .then(response => {
          if (response.ok) {
            console.log('Dane zostały zapisane!');
            console.log(JSON.stringify({
              imie: formik.values.imie,
              nazwisko: formik.values.nazwisko,
              klasa: formik.values.klasa,
              email: formik.values.emailInny,
              trescZaswiadczenia: formik.values.trescZaswiadczenia,
              srednia: formik.values.srednia,
              opisSprawy: formik.values.opisSprawy,
              file: formik.values.file,
              tematMsg: formik.values.tematMsg,
    
            }));
            window.location.reload();

          } else {
            throw new Error('Błąd zapisywania danych');
          }
        })
        .catch(error => {
          console.error(error);
        });
    },
    
  });
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



let formContent = null;
   if (id === '2') {
    formContent = (
      <div>
        <label>Email:</label>
        <input type='text'  onChange={formik.handleChange}
        value={formik.values.email}         name="email"
        />
      </div>
      
    );
  }

  if (id === '3') {
    formContent = (
      <div>
      <label>Email(inny niz zsegw.pl):</label>
      <input type='text'  onChange={formik.handleChange}
        value={formik.values.emailInny}        name="emailInny"
        />
    </div>
    );
  }
  if (id === '4') {
    formContent = (
      <div>
      <label>Tresc zaswiadczenia:</label><br />
      <textarea type='text'   onChange={formik.handleChange}
        value={formik.values.trescZaswiadczenia}         name="trescZaswiadczenia"
        />
    </div>
    );
  }

  if (id === '5') {
    formContent = (
      <div>
      <label>Srednia:</label><br />
      <input type='number' min="1" max="6"   onChange={formik.handleChange}
        value={formik.values.srednia}        name="srednia"
        />
    </div>
    );
  }

  if (id === '6') {
    formContent = (
      <div>
      <label>  temat wiadomości
</label>
<input type='text'   onChange={formik.handleChange}
        value={formik.values.tematMsg}        name="tematMsg"
        />
<br />

<label> 
pole opisu sprawy [TEXTAREA]
:</label>
<br/>
<textarea type='text' onChange={formik.handleChange}
        value={formik.values.opisSprawy}        name="opisSprawy"
        />
<br />

<label>  
  <br/>
pole załącznika [FILE]:</label>
<input type='file' onChange={formik.handleChange}
        value={formik.values.file}         name="file"
        />
<br />
    </div>
    );
  }




  return (
    <div className='Form'>
      <header className='App-header'>
      <img src={logo} className="App-logo" alt="logo" />

        {/* <p>com.Form</p>
        <p>Case ID: {id}</p>
        <p>Case URL: {loc.pathname}</p>
        <p>
          Test params: {idx} Klasa {unit} Name {name}
        </p>
        <p>Proba przeslania from: {cnt}</p> */}
{/*         
        <form method='post' action='' onSubmit={handleFormSubmit}>
          <label>Imie</label>
          <input type='text' value={imie} onChange={(e) => setImie(e.target.value)}/>
          <br />
          <br />
          <label>Nazwisko</label>
          <input type='text' value={nazwisko} onChange={(e) => setNazwisko(e.target.value)}/>
          <br />
          <br />
         

        </form> */}
        <h2> Formularz id nr {id}</h2>
       <form onSubmit={formik.handleSubmit}>
      <label htmlFor="imie">Imie</label>
      <input
        name="imie"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.imie}
      />

      <label htmlFor="nazwisko">Nazwisko</label>
      <input
        id="nazwisko"
        name="nazwisko"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.nazwisko}
      />
          {formContent}

          <label>Klasa</label>
          <select onChange={formik.handleChange}
        value={formik.values.klasa}>
            <option value='4PT5'>4PT5</option>
            <option value='4DT5'>4DT5</option>
            <option value='4ET5'>4ET5</option>
          </select>
        <br />
      <button type="submit">Submit</button>
      <button onClick={handleSaveClick}>ZAPISZ DO PLIKU JSON</button>

      {/* <SaveButton /> */}
    </form>
        {/* <button onClick={() => setCountER(cnt + 1)}>+</button> */}
      </header>
    </div>
  );
}

export default Form;