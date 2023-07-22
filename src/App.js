import './App.css'
import React from 'react';

import Header from './Components/Header/Header';
import Calculation from './Components/Calculation/Calculation';

function App() {

  const [child, setChild] = React.useState('1');

  return (
    <div className="App">
      <Header />
      <Calculation child={child} setChild={setChild} />
    </div>
  );
}

export default App;
