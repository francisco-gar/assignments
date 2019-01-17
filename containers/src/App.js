import React from 'react';



import Button from './Button';
import FormView from './FormView';

function App() {
  return(
  <div>
    
    <Button />
    <FormView id='test' handleSubmit={inputs => e => {
      e.preventDefault();
      alert(JSON.stringify(inputs))

      }} />
  </div>
  )
}

export default App;
