import logo from './logo.svg';
import NavbarComponent from './components/Navbar'
import A_Level_Past_Papers from './pages/A-Level-Maths/A_Level_Past_Papers.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavbarComponent title="Dong off" />
      <A_Level_Past_Papers />
    </div>
  );
}

export default App;
