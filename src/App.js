import './App.css';
import AOS from 'aos'
import { BrowserRouter as Router } from 'react-router-dom';
import Dieuhuong from './Router/Dieuhuong';
function App() {
  AOS.init({
    once: true,
  })
  return (
    <div className="App" >
          <Router>
            <Dieuhuong/>
          </Router>
    </div>
  );
}

export default App;
