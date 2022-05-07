import React from 'react';
import Todos from './components/Todos/Todos';


function App() {
  return (
    <div className='container py-4 text-center'>
     
		<h3 className='text-secondary'>Course ToDo's App</h3>
		<Todos></Todos>
    </div>
  );
}

export default App;
