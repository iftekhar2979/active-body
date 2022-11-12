import { } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Break = ({breakTime}) => {
   
    
    return (
        <div className='mt-5 '>
             <h2 className='text-3xl font-bold text-grey'>Add a break</h2>
             <div className="bg-gray-300 rounded-md p-5 mt-4">
                {breakTime.map(item=>{return(
                    <button className="btn btn-blue-700 m-1" key={item}>{item} s</button>
                )})}
             </div>
        </div>
    );
};

export default Break;