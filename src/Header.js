import React from 'react'
import "./Header.css";
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';

function Header() {
  return <div className="header">
    <IconButton>
        <PersonIcon fontSize='large' className='header_icon'/>
    </IconButton>

    <img 
        className='header__logo'
        src='https://www.tinderpressroom.com/image/flame-gradient-RGB_tn1100-category.png'
        alt='tinder'
    />
    
    <IconButton>
        <ForumIcon fontSize='large' className='header__icon'/>
    </IconButton>

  </div>
}

export default Header