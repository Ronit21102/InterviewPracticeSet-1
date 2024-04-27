import { useRef, useState } from "react";

function App() {
   const [fullName, setFullName] = useState('');
   
   const firstName = useRef();
   const lastName = useRef();

   const addName = (e) => {
     e.preventDefault();
     setFullName(`${firstName.current.value} ${lastName.current.value}`);
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
