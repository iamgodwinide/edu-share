import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/Home';
import Read from './pages/Read';
import Result from './pages/Result';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/search/:dept/:level/:semester" element={<Result />} />
          <Route exact path="/about" element={<Home />} />
          <Route exact path="/contact" element={<Home />} />
          <Route path="/read/:id" element={<Read />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>

      <footer>
        <p>Made with ❤</p>
      </footer>
    </>

  )
}

export default App