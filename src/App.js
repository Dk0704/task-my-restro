import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home'
import BookMark from './Components/BookMark/BookMark'
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="container">
      <Router>
        <Sidebar />
        <div className='feed'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/bookmarks' element={<BookMark />} />
            <Route path='/login' element={<BookMark />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
