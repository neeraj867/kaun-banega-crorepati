import { useEffect,useState } from 'react'

const Timer = ({setStop,questionNum}) => {
  const initialVal = 30;
  const [timer,setTimer] = useState(initialVal);
  useEffect(()=>{
    if(timer === 0) return setStop(true);
    const interval = setInterval(()=>{
        setTimer(prev=>prev-1);
    },1000);
    return () => clearInterval(interval);
  },[setStop,timer]);

  useEffect(()=>{
    setTimer(initialVal);
  },[questionNum]);
  return timer;
}

export default Timer