import React from 'react';

const Card = ({ data ,clickHandler}) => {
  const { name, picture, details, forAge ,time} = data;
  return (
    <div className='mt-3 m-2'>
      <div className='card w-96 bg-base-100 shadow-xl'>
        <figure className='px-10 pt-10'>
          <img
            src={picture}
            alt={name}
            className='rounded-xl'
          />
        </figure>
        <div className='card-body items-center text-center'>
          <h2 className='card-title'>{name}</h2>
          <p>{details}</p>
          <p>for Age : {forAge} years</p>
          <p>Duration : {time} seconds</p>
          <div className='card-actions'>
            <button onClick={()=>clickHandler(data)} className='btn btn-primary'>Add to WishList</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;