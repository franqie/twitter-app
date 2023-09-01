// import React from 'react';

const NavItem = ({icon, title}) => {
  return (
    <div className="nav-item">
        {icon}
        <span className="nav-text">{title}</span>
    </div>
  )
}

export default NavItem;