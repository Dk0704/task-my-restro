import React from 'react'
import './sidebar.css'
import { Avatar } from '@mui/material';
import { Link } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = () => {
    return (
        <div>
            <aside>
                <div className="top">
                    <div className="logo" title='Click to logout'>
                        <Avatar className='profile-photo' />
                        <h2>LOOP <span className="danger">Kitchen</span></h2>
                    </div>
                    <div className="close" id="close-btn">
                        <span className="material-symbols-sharp">close</span>
                    </div>
                </div>

                <div className="sidebar">
                    <Link to="/home">
                        <span><HomeIcon/></span>
                        <h1>Home</h1>
                    </Link>
                    <Link to="/bookmarks">
                        <span><BookmarkAddedRoundedIcon/></span>
                        <h1>Bookmarks</h1>
                    </Link>
                    <a href="/login">
                        <span><LogoutIcon/></span>
                        <h1>Logout</h1>
                    </a>
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
