import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Break from './Break';
import Detail from './Detail';
import ExerciseDetail from './ExerciseDetail';
import profile from './img/profile.jpg';

const Profile = ({ time }) => {
  const [first, setfirst] = useState(0)
  
  const breakTime = [10, 20, 30, 40, 50, 60];
  let totalTime = 0;
  const totaltimewill = () => {
    for (const item of time) {
      totalTime = item.time + totalTime;
      // console.log(totalTime);
    }
    return totalTime;
  };
  const mytotaltime = totaltimewill();

  useEffect(()=>{
    const mybreakseconds=localStorage.getItem('time')
    setfirst(mybreakseconds)
  },[])
  const handlebreakButton = (e) => {
    setfirst(e)
    localStorage.setItem('time',e)
    // window.location.reload()
 
  };
  
  // console.log(first);
// console.log(first);
  return (
    <div className='text-left'>
      <div className='w-3/12 fixed'>
        <div className='flex'>
          <img src={profile} alt='Iftekhar' className='rounded-3xl w-20' />
          <div>
            <h2 className='text-2xl font-bold ml-4'>Iftekhar</h2>
            <div className='flex flex-column mt-3'>
              <FontAwesomeIcon
                icon={faLocationPin}
                className='text-sm mt-1 ml-4'
              ></FontAwesomeIcon>
              <h2>Mipur,Dhaka</h2>
            </div>
          </div>
        </div>
        <Detail></Detail>
        <Break breakTime={breakTime} handlebreakButton={handlebreakButton} ></Break>
        <h2 className='text-3xl font-bold mt-4'>Exercise Details</h2>
        <ExerciseDetail
          name='Exercise Time'
          time={mytotaltime}
        ></ExerciseDetail>
        <ExerciseDetail
          name='Break Time'
          time={first}
        ></ExerciseDetail>
        <div className='text-center'>
        <button  className="btn btn-blue-700 mt-5">Activate</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
