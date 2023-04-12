import logo from './logo.svg';
import './App.css';
import Navbar from './component/navbar/navbar';
import { Home } from './home';

function App() {
  return (
    <div className="App">
    <Navbar/>
   
    <Home/>
    </div>
  );
}

export default App;
