import React from 'react';

const Card = ({ data ,clickHandler,}) => {
  const { name, picture, details, forAge ,time} = data;
  return (
    <div className='mt-3 m-2'>
      <div className='card  lg:w-60 md:w-60 sm:w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img
            src={picture}
            alt={name}
            className='rounded-xl'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{name}</h2>
          <p>{details.slice(0,40)}...</p>
          <p className='text-md  font-semibold'>For Age : {forAge} years</p>
          <p className='text-md font-semibold'>Duration : {time} seconds</p>
          <div className='card-actions'>
            <button onClick={()=>clickHandler(data)} className='btn bg-sky-500 border-blue-500 hover:bg-slate-500'>Add to WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
