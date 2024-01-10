import { useState } from "react"

  const Home = ()=>{
    const [name,setName] = useState('Aman');
    const [age,setAge] = useState('25');

    const handleClick = (e)=>{
        console.log(" The button is clicked!!")
        console.log(e)
    }
    const handleClickAgain=(nm,e)=>{
       setName(nm);
       setAge(30);
        console.log("Hi"+name);
        console.log(e.target);
        
    }
    return(
        <div className="home">
            
            <h2> This is the home page !! </h2><br/>
           
            <p> Name : {name} </p><br/> Age : {age}<br/><br/>
            <button onClick={handleClick}> First Button</button>
            <button onClick={(e)=>handleClickAgain(' Hazza',e)}> Change Name</button>
        </div>
    );
 }
 export default Home;