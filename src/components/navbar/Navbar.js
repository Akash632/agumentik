import React from 'react';
import './Navbar.css';
import SearchIcon from '@mui/icons-material/Search';
import TuneIcon from '@mui/icons-material/Tune';
import CategoryIcon from '@mui/icons-material/Category';
function Navbar() {
  return (
    <div className='navbar-main-container'>
      <div className='navbar-bg-container'>
        <div className='navbar-icon-container'>
          <CategoryIcon style={{fontSize:"30px",color:"#151619"}}/>
          <h1>akon</h1>
        </div>
        <div className='navbar-options-container'>
          <p>HOME</p>
          <p>ABOUT</p>
          <p>SERVICE</p>
          <p>PAGES</p>
          <p>BLOG</p>
          <p>CONTACT US</p>
        </div>
        <div className='navbar-right-container'>
          <SearchIcon style={{fontSize:"30px",color:"#FB8CA3"}}/>
          <TuneIcon style={{fontSize:"30px",color:"#FB8CA3"}}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
