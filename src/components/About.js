import React, { useState } from 'react'

export default function About() {
    
   const[myStyle,setMyStyle]=useState({
     
      color: 'white',
      backgroundColor: 'black' 
 })

 const [buttonmode, setbtnText] = useState("Enable dark Mode")


  const ToggleStyle=()=>{

if(myStyle.color=='white'){
setMyStyle({
color:'black' ,
backgroundColor: 'white'

}



)
setbtnText("enable Dark Mode")

}
else{
    setMyStyle({
        color:'white' ,
        backgroundColor: 'black'

})

setbtnText("Disable  Dark Mode")

}




   }
    return (
        <div className="container" style ={myStyle}>
            <h1 className="my-2">About US</h1>
            <div ClassName="accordion accordion-flush"   id="accordionFlushExample">
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header" id="flush-headingOne">
      <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" style ={myStyle} data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="flush-collapseOne" ClassName="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div ClassName="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
    </div>
  </div>
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header" id="flush-headingTwo">
      <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" style ={myStyle} aria-expanded="false" aria-controls="flush-collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="flush-collapseTwo" ClassName="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div ClassName="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
    </div>
  </div>
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header" id="flush-headingThree">
      <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" style ={myStyle} aria-expanded="false" aria-controls="flush-collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="flush-collapseThree" ClassName="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div ClassName="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>

<button onClick={ToggleStyle}>{buttonmode}</button>
        </div>
    )
}
