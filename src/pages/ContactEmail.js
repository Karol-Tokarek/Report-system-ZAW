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

function EmailContent() {

    const onSubmit = data => { console.log(data) };
  const formik = useFormik({
    initialValues: {
      emailNadawcy: '',
      emailOdbiorcy: '',
      tresc:'',
   
    },
    onSubmit: values => {

      console.log(values);
      fetch('http://localhost:3001/emailSend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({        
            emailNadawcy: values.emailNadawcy,
            emailOdbiorcy: values.emailOdbiorcy,
            tresc: values.tresc })
      })
        .then(response => {
          if (response.ok) {
            console.log('Dane zostały wyslane!');
            console.log(JSON.stringify({
                emailNadawcy: formik.values.emailNadawcy,
                emailOdbiorcy: formik.values.emailOdbiorcy,
                tresc: formik.values.tresc,
        
    
            }));
            window.location.reload();

            // window.location.reload();

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

const txt = "";

  return (
    <div>
        
        <header class="App-header">
        <img src={logo} className="App-logo" alt="logo" /><br/><br/>
        <h2> Wyslij email: </h2>
    <form onSubmit={formik.handleSubmit}>
<label>Email odbiorcy</label>
<input type='email' name='emailOdbiorcy' onChange={formik.handleChange}
        value={formik.values.emailOdbiorcy}/>
<label>Tresc wiadomosci</label><br/>
<textarea name='tresc' onChange={formik.handleChange}
        value={formik.values.tresc}></textarea>
<br/><button type="submit">Submit</button>

</form>

      </header>
    </div>
  );
}

export default EmailContent;