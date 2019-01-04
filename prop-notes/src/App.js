import React from 'react';

import Todo from './Todo';

const todos = [{
    title: 'Teach the students',
    description: 'pass on the know',
    price: 'priceless'
},

{
  title: 'get rid of cough',
  description: 'ugh',
  price: '3'
},

{
  title: 'learn map',
  description: 'make life easy',
  price: '3'
}]

const App = () => {
  const todoComponents = todos.map((todo, i) => <Todo key={i}{...todo}/>);
  return(
  <div>
    {todoComponents}
  </div>)
}

export default App;