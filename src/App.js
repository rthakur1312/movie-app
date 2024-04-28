import './App.css';
import Home from './pages/Home';
import Search from './pages/Search';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navigation/Navbar';

function App() {
  return (
    <Router>
    <div className="App">
        <Navbar />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/search" element={<Search />} />
        </Routes>
    </div>
</Router>
  );
}

export default App;
