import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div>
      <h3>Here is Ours Terms And Conditions</h3>
      <p>Go Back To: <Link to='/register'> Registration</Link></p>
    </div>
  );
};

export default TermsAndConditions;