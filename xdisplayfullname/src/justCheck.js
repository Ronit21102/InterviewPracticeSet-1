import { useEffect, useRef, useState } from "react";

function JustCheck() {
   
    const [addFullName, setAddFullName] = useState({ FirstName: "", LastName: "" });
   const [fullName,setFullName] = useState('');
//    const firstName =useRef()
//    const lastName =useRef()
   
   useEffect(()=>{
      const alreadyData = localStorage.getItem('fullname')
       if(alreadyData&&alreadyData.length>0){
        const arr = alreadyData.split(" ");
        setAddFullName(prevState=>({
            ...prevState,
            FirstName: arr[0], 
            LastName: arr[1] 
            
        }))
        setFullName(alreadyData)
       }
   },[])
   const addName =(e)=>{
       
     const fullNameValue = `${addFullName.FirstName} ${addFullName.LastName}`
     setFullName(fullNameValue)
     
     localStorage.setItem('fullname',fullNameValue)
   }
   
   const inputHandler = (e)=>{
       console.log(e.target.name)

       setAddFullName(prevState => (
        {
            ...prevState,
            [e.target.name]:e.target.value
        }
       ))
   }
  return (
    <>
       <h1>Full Name Display</h1>
       <span>First Name:</span><input type="text" name="FirstName" onChange={inputHandler} value={addFullName.FirstName}/><br/>
       <span>Last Name:</span><input type='text' name="LastName" onChange={inputHandler} value={addFullName.LastName} /><br/>
        <button onClick={addName}>Submit</button>

        {fullName.length>0&&<p>Full Name:{fullName}</p>}
    </>
  );
}

export default JustCheck;
