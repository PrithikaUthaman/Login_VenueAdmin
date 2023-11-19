import Login from './Components/Login/Login';
import './App.css';
import { Routes, Route } from 'react-router-dom'; 
import Homepage from './Components/Dashboard/Homepage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path ="/" element={<Login/>}/>
          <Route path="Home" element={<Homepage/>}/>
        </Routes>     
      </header>
    </div>
  );
}

export default App;
