import React from 'react'
import  './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';

function Header() {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    const logoutOfApp = () => {
         dispatch(logout());
         auth.signOut();
    };

  return (
    <div className='header'>
        <div className="header__left">
            <img src="data:image/png;base64,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" alt="" />
            <div className="header__search">
                {/* searchIcon */}
                <SearchIcon/>
                <input placeholder='Search' type="text" />
            </div>

        </div>
        <div className="header__right">
            <HeaderOptions Icon={HomeIcon}  title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsIcon} title="Notification"/>
            <HeaderOptions avatar={true} 
            title="Me"
            onClick={logoutOfApp}
            />
        </div>
    </div>
  )
}

export default Header