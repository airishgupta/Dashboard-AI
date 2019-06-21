import React from 'react';
import {
  IoMdSearch, IoMdSettings, IoMdCart,
} from 'react-icons/io';
import { MdSubject } from 'react-icons/md';

import '../styles/NavbarStyles.scss';

const NavBar = ({ toggleSideBar }) => {
  const styles = {
    navBar: 'dv2__dashboard-nav-bar__container',
    navBarSearch: 'dv2__dashboard-nav-bar__search',
    sideBarButton: 'dv2__dashboard-nav-bar__side-bar-button',
  };

  return (
    <div className={styles.navBar}>
      <button
        onClick={toggleSideBar}
        className={styles.sideBarButton}
      >
        <MdSubject size={20} />
      </button>
      <IoMdSearch size={20} />
      <input className={styles.navBarSearch} placeholder="Search" />
      <IoMdSettings size={20} />
      <IoMdCart size={20} />
    </div>
  );
};

export default NavBar;
