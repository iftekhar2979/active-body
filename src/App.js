import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import Profile from './component/profile/Profile';

function App() {
  const [exercise, setExercise] = useState([])
  const [time,setTime]=useState([])
  useEffect(()=>{
    fetch('fakeData.json')
    .then(res=>res.json())
    .then(data=>{
    setExercise(data)
    })
  },[])
const handleButton=(e)=>{
// console.log([...time,e]);
setTime([...time,e])
 
}
  return (
    <div className=' container mx-auto flex mt-5'>
    <Header exercise={exercise} time={time} clickHandler={handleButton}></Header>
    <Profile time={time}></Profile>
    
    </div>
  );
}

export default App;
