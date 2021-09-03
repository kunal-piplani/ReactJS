import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import About from './components/About';
import React ,{useState} from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  const [alert, setAlert] = useState(null);
const showAlert=(message,type)=>{

setAlert({
  msg:message,
type:type
})
setTimeout(() => {
  setAlert(null)
}, 3000);

}

const removeBodyClasses=()=>{

  document.body.classList.remove('bg-light');
  document.body.classList.remove('bg-dark');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-success');


}
  const toggleMode= (cls)=>{
    console.log(cls);
    removeBodyClasses();
document.body.classList.add('bg-'+cls)


if(mode==='light'){
setMode('dark');
setText('Switch to Light Mode')
document.body.style.backgroundColor='#343a40'
showAlert("Dark Mode Enabled ","success")
document.title ='AITA-DarkMode'
setInterval(() => {
  document.title='AITA is AMAZING'
}, 2000);
setInterval(() => {
  document.title='INSTALL AITA NOW'
}, 1500);
}
else{
  setMode('light');
  setText('Switch to Dark Mode')
  document.body.style.backgroundColor='white'
  showAlert("Light Mode Enabled ","success")
  document.title ='AITA-LightMode'

}

  }
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Disable Dark Mode');


  return (
  <>
 <Router>
 <NavBar title="AITA" mode={mode} toggleMode ={toggleMode} text={text} />
 <Alert alert={alert}></Alert>
 <div className="container my-3">
 <Switch>
          <Route path="/about">
            <About mode={mode} />
          </Route>
        
         
          <Route path="/">
          <TextArea showAlert={showAlert} heading="Word Count Uility" mode={mode}/>
          </Route>
        </Switch>
 

 </div>

 </Router>
 </>
  );
}

export default App;
