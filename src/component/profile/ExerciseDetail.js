import React from 'react';

const ExerciseDetail = ({name,time}) => {
    return (
        <div className='bg-gray-300 flex justify-between rounded p-4 mt-2'>
           <p className='text-xl'>{name} : </p>
           <p className='text-xl'>{time}s </p>
        </div>
    );
};

export default ExerciseDetail;