import React, { useRef, useState } from "react";

function App() {
   const [fullName, setFullName] = useState('');
   
   const firstName = useRef();
   const lastName = useRef();

   const addName = (e) => {
     e.preventDefault();
     const sanitizedFirstName = sanitizeInput(firstName.current.value);
     const sanitizedLastName = sanitizeInput(lastName.current.value);
     setFullName(`${sanitizedFirstName} ${sanitizedLastName}`);
   }

   const sanitizeInput = (input) => {
     // Regular expression to remove special characters
     return input.replace(/[^\w\s]/gi, '');
   }
   
  return (
    <form onSubmit={addName}>
       <h1>Full Name Display</h1>
       <span>First Name:</span><input type="text" ref={firstName} required /><br/>
       <span>Last Name:</span><input type='text' ref={lastName} required /><br/>
       <button type="submit">Submit</button>
       
       {fullName && <p>Full Name: {fullName}</p>}
    </form>
  );
}

export default App;
