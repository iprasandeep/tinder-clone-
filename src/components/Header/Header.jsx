import React from 'react';
import './header.css';
import PersonIcon from '@mui/icons-material/Person';
import IconButton from '@mui/material/IconButton';
import ForumIcon from '@mui/icons-material/Forum';
import Logo from '../../assets/tinder-logo.png'
const Header = () => {
  return (
    <div className='header'>
      <IconButton>
        <PersonIcon fontSize='large' className='header_icon'/>
      </IconButton>
     <img src={Logo} className='headr_logo'  alt=''  />
      <IconButton>
        <ForumIcon  fontSize='large' className='header_icon' />
      </IconButton>
    </div>
  )
}
export default Header;