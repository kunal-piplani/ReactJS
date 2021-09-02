import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import About from './components/About';
import React ,{useState} from 'react';
import Alert from './components/Alert';

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


  const toggleMode= ()=>{
if(mode==='light'){
setMode('dark');
setText('Switch to Light Mode')
document.body.style.backgroundColor='#343a40'
showAlert("Dark Mode Enabled ","success")
}
else{
  setMode('light');
  setText('Switch to Dark Mode')
  document.body.style.backgroundColor='white'
  showAlert("Light Mode Enabled ","success")

}

  }
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Disable Dark Mode');


  return (
  <>
 <NavBar title="AITA" mode={mode} toggleMode ={toggleMode} text={text} />
 <Alert alert={alert}></Alert>
 <div className="container my-3">
   {/* <About></About> */}
 <TextArea showAlert={showAlert} heading="Word Count Uility" mode={mode}/>

 </div>

 </>
  );
}

export default App;
