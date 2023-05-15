import '../src/Style/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainBoard from './Pages/MainBoard';
import AppNav from './Components/AppNav';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNav/>
        <Routes>
          <Route path='/' element={<MainBoard/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
