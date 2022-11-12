import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Break = ({breakTime,handlebreakButton}) => {
   
    // const [breaktime, setBreakTime] = useState(0);
//   const handlebreakButton = (e) => {
//     console.log(e);
//     setBreakTime(e)
//   };
//   console.log(breaktime);
    return (
        <div className='mt-5 '>
             <h2 className='text-3xl font-bold text-grey'>Add a break</h2>
             <div className="bg-gray-300 rounded-md p-5 mt-4">
                {breakTime.map(item=>{return(
                    <button className="btn bg-sky-500 m-1 w-9 md:w-16" onClick={()=>handlebreakButton(item)} key={item}>{item} s</button>
                )})}
             </div>
        </div>
    );
};

export default Break;