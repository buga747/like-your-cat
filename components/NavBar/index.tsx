import React from 'react';
import Search from '../Search';
import NavBarMenu from './NavBarMenu';

const AppBar = () => {
  return (
    <div className="flex gap-2.5">
      <Search />
      <NavBarMenu />
    </div>
  );
};

export default AppBar;
