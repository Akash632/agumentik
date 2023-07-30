import './App.css';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Work from './components/work/Work';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Work/>
    </div>
  );
}

export default App;
