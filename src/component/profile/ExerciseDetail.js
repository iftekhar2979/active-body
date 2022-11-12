import React from 'react';

const ExerciseDetail = ({name,time}) => {
    return (
        <div className='bg-gray-300 flex justify-between flex-wrap rounded p-4 mt-2'>
           <p className='text-xl text-blue-700'>{name} : </p>
           <p className='text-xl'>{time} seconds </p>
        </div>
    );
};

export default ExerciseDetail;