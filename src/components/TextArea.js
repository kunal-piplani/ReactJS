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

            const handCopyClick=()=>{

                console.log("copying ");
                var text =document.getElementById("box");
                text.select();
 
                
                navigator.clipboard.writeText(text.value)
                // settext(text)
                document.getSelection().removeAllRanges();
                props.showAlert("Text Copied","success")
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
  <label htmlFor="AITATEXT" className="form-label">Text Utility-Word Counter Character Counter  </label>
  <textarea className="form-control" value={text}   onChange={handleonChange} id="box" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}} rows="3"></textarea>
</div>    
       <button  disabled={text.length===0} className="btn btn-primary mx-3" onClick={handleClick}>convert to uppercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handlelowClick}>convert to lowercase</button>
       <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={clearText}>Clear Button</button>
       <button disabled={text.length===0} className="btn btn-primary mx-3" onClick={handCopyClick}>Copy Button</button>

       </div>

<div className="container my-3 " >

    <h3>Text Summary </h3>
<p>
   character   count is {text.length}
</p>

<p>
words  count is {text.split(" ").filter((element)=>{return element.length!==0}).length}
</p>

</div>
<div className="container my-3 " >

    <h3>Preview</h3>
    <p>{text.length===0?"Nothing to preview":text}</p>
    </div>
     </>  
    )
}
