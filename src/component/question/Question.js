import React from 'react';

const Question = () => {
    
    return (
      <div>
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium">
          HOw does react work?
        </div>
        <div className="collapse-content"> 
          <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
        </div>
      </div>
      <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-xl font-medium">
        Diffrence between props and state?
      </div>
      <div className="collapse-content"> 
        <p>While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).</p>
      </div>
    </div>
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
      <div className="collapse-title text-xl font-medium">
      What is the use of useEffect other than loading data?
      </div>
      <div className="collapse-content"> 
        <p>We can use useEffect to filter an array "on the fly" by typing letters into an input element. To do so, we will need to use a state to save the input, and a filter implementation inside the useEffect that will be triggered when the input changes, thanks to useEffect dependencies.</p>
      </div>
    </div>
      </div>
    
    );
};

export default Question;