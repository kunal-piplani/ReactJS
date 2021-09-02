import React from 'react'

export default function Alert( props) {
    const capatalize =(word)=>{

const lower =word.toLowerCase();
return lower.charAt(0).toUpperCase()+lower.slice(1);

        
    }
   
   
    return (
     <div style={{height:'50px'}}>
          {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
           <strong>{capatalize(props.alert.msg)} </strong> :{props.alert.type} 
             </div>}
            </div>
            
       
    )
}
