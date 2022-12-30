import React from 'react';
import './header.css';
import PersonIcon from '@mui/icons-material/Person'; 
const Header = () => {
  return (
    <div>
      <h2>I am from Header!</h2>
       < PersonIcon  fontSize='large' className='header_icon' />
        <img  className='header_logo' src='' alt='logo'/>
    </div>
  )
}
export default Header;