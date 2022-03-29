import './App.css';
import Header from './Components/Header/Header';
import Pricing from './Components/Pricing/Pricing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <br />
      <h1 className='text-6xl font-mono'>Welcome to Tailwind Pricing</h1>
      <Pricing></Pricing>
    </div>
  );
}

export default App;
