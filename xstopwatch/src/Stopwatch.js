import React,{useState,useRef} from 'react'


const Stopwatch = () => {
    const [isRunning,setIsRunning] = useState(false);
     const [value,setValue]=useState(0);
     const timer = useRef(null)
    const clickStart = ()=>{
        if(!isRunning){
            setIsRunning(true)
             console.log("render")
            timer.current= setInterval(()=>{
                setValue(prev=>prev+1)
            },1000)
        }
    }

    const clickStop =()=>{
        
        setValue(0);
        clearInterval(timer.current);
        setIsRunning(false)
        
    }
  return (
    <div>
        <h1>Stopwatch</h1>
        <p>Time: {value}</p>
        <button onClick={clickStart}>start</button>
        <button onClick={clickStop}>reset</button>
    </div>
  )
}

export default Stopwatch