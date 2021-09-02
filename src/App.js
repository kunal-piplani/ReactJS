import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import TextArea from './components/TextArea';
import About from './components/About';
import React ,{useState} from 'react';
import Alert from './components/Alert';

function App() {
  const toggleMode= ()=>{
if(mode==='light'){
setMode('dark');
setText('Switch to Light Mode')
document.body.style.backgroundColor='#343a40'
}
else{
  setMode('light');
  setText('Switch to Dark Mode')
  document.body.style.backgroundColor='white'
}

  }
  const [mode, setMode] = useState('light');
  const [text, setText] = useState('Disable Dark Mode');
  const [alert, setalert] = useState(null);
const ShowAlert=(message,type)=>{

setalert({msg:message,
type:type
})


}

  return (
  <>
 <NavBar title="AITA"  toggleMode ={toggleMode} text={text} />
 <Alert ></Alert>
 <div className="container my-3">
   {/* <About></About> */}
 <TextArea heading="Word Count Uility" mode={mode}/>

 </div>

 </>
  );
}

export default App;
