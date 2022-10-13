import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home/Home'
import BookMark from './Components/BookMark/BookMark'
import Sidebar from './Components/Sidebar/Sidebar';
import { useSelector } from 'react-redux';
import { selectUser } from './features/counter/userSlice';
import Login from './Components/Login/Login'

function App() {

  const user = useSelector(selectUser);
  const [curuser, setCurruser] = useState(user);
  console.log(user)
  useEffect(() => {

  }, [user]);

  return (
    <Router>
      {!user ? <Login setUser={setCurruser} /> :
        <>
          <div className="container">
            {user && <Sidebar />}
            <div className='feed'>
              <Routes>

                {/* <Route path='/login' element={<Login />} /> */}
                <Route path='/home' element={<Home />} />
                <Route path='/bookmarks' element={<BookMark />} />
                <Route path='/login' element={<BookMark />} />
              </Routes>
            </div>
          </div>
        </>}
    </Router>
  );
}

export default App;
