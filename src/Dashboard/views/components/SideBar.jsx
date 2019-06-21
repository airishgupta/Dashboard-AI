import React from 'react';
import { IoMdHome } from 'react-icons/io';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import '../styles/SideBarStyles.scss';

const sideBarTabs = [
  { tabName: 'HOME', action: '/home' },
  { tabName: 'PROJECTS', action: '/projects' },
  { tabName: 'MESSAGES', action: '/messages' },
  { tabName: 'Analytics', action: '/analytics' },
  { tabName: 'Tasks', action: '/tasks' },

];

const SideBar = ({ showSideBar }) => {
  const styles = {
    wrapper: 'dv2__dashboard-sidebar__wrapper',
    userInfo: 'dv2__dashboard-sidebar__user-info-container',
    userImage: 'dv2__dashboard-sidebar__user-image',
    userName: 'dv2__dashboard-sidebar__user-name',
    sideBarTab: 'dv2__dashboard-sidebar__tab',
    container: 'dv2__dashboard-sidebar__container',
    animateSideBar: 'dv2__dashboard-sidebar__container-animation',
  };

  const sideBarStyle = classNames('dv2__dashboard-sidebar__container', {
    [styles.animateSideBar]: showSideBar,
  });


  return (
    <div className={sideBarStyle}>
      <div className={styles.wrapper}>
        <div className={styles.userInfo}>
          <div>
            <img className={styles.userImage} alt="Profile Image" src="https://i0.wp.com/zblogged.com/wp-content/uploads/2019/02/FakeDP.jpeg?resize=567%2C580&ssl=1" />
          </div>
          <span className={styles.userName}>JOHN KICK</span>
        </div>
        <div>
          {sideBarTabs.map(tab => (
            <div className={styles.sideBarTab}>
              <IoMdHome size={20} color="white" />
              <span>{tab.tabName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  showSideBar: PropTypes.bool.isRequired,
};

export default SideBar;
