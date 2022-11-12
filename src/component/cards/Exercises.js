import React from 'react';
import Card from './Card';

const Exercises = ({ data,clickHandler }) => {
  return (
    <div className='mt-3'>
      <h3 className='text-2xl font-semibold'>Select Todays Exercise</h3>
      <div className=' flex flex-wrap'>
        {data.map((item) => {
          return <Card data={item} clickHandler={clickHandler} key={item._id} ></Card>;
        })}
      </div>
    </div>
  );
};

export default Exercises;
