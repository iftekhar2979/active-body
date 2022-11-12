import { faChargingStation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import Exercises from '../cards/Exercises';
import Question from '../question/Question';

const Header = ({exercise,clickHandler,time}) => {
  return (
    <div className='bg-white w-9/12'>
      <div className='flex '>
        <FontAwesomeIcon
          icon={faChargingStation}
          className='text-5xl text-green-400'
        ></FontAwesomeIcon>
        <h1 className='text-4xl font-bold ml-2 text-green-400'>Charge Body</h1>
      </div>
      <Exercises data={exercise} clickHandler={clickHandler} time={time} ></Exercises>
      <Question></Question>
    </div>
  );
};

export default Header;
