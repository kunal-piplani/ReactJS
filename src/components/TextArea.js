import React,{useState} from 'react'

export default function TextArea(props) {
    const handleClick=()=>{

console.log("clicked ");

let vartext = text.toUpperCase();

settext(vartext)
    }


    const handlelowClick=()=>{

        console.log("clicked ");
        
        let vartext = text.toLowerCase();
        
        settext(vartext)
        props.showAlert("Converted to lowercase","success")
            }


            const clearText=()=>{

                
                
                let clear = '';
                
                settext(clear)
                    }


    const handleonChange=(event)=>{

       

        settext(event.target.value)
            }
    
            const [text, settext] = useState('');
    
    return (

    <>
<div className ="container">
       
         
            
      <h2>{props.heading}</h2>
      <div className="mb-1"  style={{color:props.mode==='dark'?'blue':'black'}} >
  <label htmlFor="AITATEXT" className="form-label">Enter Your Text </label>
  <textarea className="form-control" value={text}   onChange={handleonChange} style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="3"></textarea>
</div>    
       <button className="btn btn-primary mx-3" onClick={handleClick}>convert to uppercase</button>
       <button className="btn btn-primary mx-3" onClick={handlelowClick}>convert to lowercase</button>
       <button className="btn btn-primary mx-3" onClick={clearText}>Clear Button</button>

       </div>

<div className="container my-3 " >

    <h3>Text Summary </h3>
<p>
   character   count is {text.length}
</p>

<p>
words  count is {text.split(" ").length}
</p>

</div>
<div className="container my-3 " >

    <h3>Preview</h3>
    <p>{text}</p>
    </div>
     </>  
    )
}
