import './App.css';
import Header from './Components/Header/Header';
import Mainpage from './Components/Mainpage/Mainpage';
import Calculation from './Components/Calculation/Calculation';
import Results from './Components/Results/Results';

function App() {
  return (
    <div className="App">
     <Header/>
     {/* <Mainpage/> */}
     <Calculation/>
     <Results/>
    </div>
  );
}

export default App;
