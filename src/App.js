// import logo from './banner.png';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Form from "./pages/Form.js";
import Help from "./pages/Help.js";
import Main from "./pages/Main.js";
import Panel from "./pages/Panel.js";
import Email from "./pages/ContactEmail.js";


// let tasks = require('./tasks.json');

// function AppRoutes() {
//   const routes = useRoutes(
//     [
//       {path:'/',element:<Main/>},
//       {path:'/form',element:<Form/>},
//       {path:'/help',element:<Help/>}

//     ]
//   )
//   return routes;
// }
function listTasks()
{
  // let lst = '';
  // for( let [key, value] of Object.entries(tasks))
  // {
  //     console.log(key + " : "+value);
  //     lst.push('<li><a href="#${key}">${value}</a></li>');

  // }
  // return lst;

}


function App() {
  return (
    <Routes>
<Route path="/" element={<Main/>} />
<Route path="/form/:id?/:unit?/:name?" element={<Form/>} />
<Route path="/help" element={<Help/>} />
<Route path="/panel" element={<Panel/>} />
<Route path="/email" element={<Email/>} />


</Routes>
  )
}

export default App;
