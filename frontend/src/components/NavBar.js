import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div id="nav-bar" >
      <NavLink style={{ marginRight: '20px' }} to="/">Home</NavLink>
      <NavLink style={{ marginRight: '20px' }} to="/trips">My Trips</NavLink>
      <NavLink style={{ marginRight: '20px' }} to="/trips/new">Make a New Trip</NavLink>
    </div>
  );
}

export default NavBar
