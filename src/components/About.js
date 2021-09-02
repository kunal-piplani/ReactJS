import React, { useState } from 'react'

export default function About(props) {
 
  let myStyle={

color:props.mode=='dark'?'white':'#caaf5f',
backgroundColor:props.mode=='dark'?'#caaf5f':'white',
borderColor:props.mode=='dark'?'white':'#caaf5f'
  }


//    const[myStyle,setMyStyle]=useState({
     
//       color: 'white',
//       backgroundColor: 'black' 
//  })

//  const [buttonmode, setbtnText] = useState("Enable dark Mode")


//   const ToggleStyle=()=>{

// if(myStyle.color==='white'){
// setMyStyle({
// color:'black' ,
// backgroundColor: 'white'

// }



// )
// setbtnText("enable Dark Mode")

// }
// else{
//     setMyStyle({
//         color:'white' ,
//         backgroundColor: 'black'

// })

// setbtnText("Disable  Dark Mode")

// }




//    }
    return (
        <div className="container" style ={myStyle}>
        {/* <div className="container my-10" > */}
            <h1 className="my-10">About US</h1>
            <div ClassName="accordion accordion-flush my-7"   id="accordionFlushExample">
  <div ClassName="accordion-item">
    <h3 ClassName="accordion-header" id="flush-headingOne">
      <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse"  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <h4>WHO WE ARE</h4>
      </button>
    </h3>
    <div id="flush-collapseOne" ClassName="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div ClassName="accordion-body" style ={myStyle}>AITA IS low-code, intelligent test automation platform. Agile teams use mabl's SaaS platform for automated end-to-end testing that integrates directly into the entire development lifecycle. It is easy to create, execute, and maintain software tests with mabl. Our native auto-heal capability evolves tests with your changing UI, and comprehensive test results help users quickly resolve bugs before they reach production.</div>
    </div>
  </div>
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header" id="flush-headingTwo">
      <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo"  aria-expanded="false" aria-controls="flush-collapseTwo">
      <h4>Why US </h4>
      </button>
    </h2>
    <div id="flush-collapseTwo" ClassName="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div ClassName="accordion-body" style ={myStyle}>AITA solves the problem of QA as a bottleneck in the software development process. Web app development teams can subscribe to the service, create functional UI tests without any coding, run them incredibly fast, and quickly generate reports identifying potential issues to be addressed by the team..</div>
    </div>
  </div>
  <div ClassName="accordion-item">
    <h2 ClassName="accordion-header" id="flush-headingThree">
      <button ClassName="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree"  aria-expanded="false" aria-controls="flush-collapseThree">
      <h4>Contact US </h4> 
      </button>
    </h2>
    <div id="flush-collapseThree" ClassName="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div ClassName="accordion-body" style ={myStyle}> For any issues/queries write us on AITA@IntelligentTestSciptor.com</div>
    </div>
  </div>
</div>
{/* 
<button onClick={ToggleStyle}>{buttonmode}</button> */}
        </div>
    )
}
