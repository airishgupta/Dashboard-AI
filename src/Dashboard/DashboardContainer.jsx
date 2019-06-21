import React, { useState } from 'react';
import './views/styles/DashboardContainerStyles.scss';
import Dashboard from './views/components/Dashboard';
import SideBar from './views/components/SideBar';

const DashboardContainer = () => {
  const styles = {
    container: 'dv2__dashboard-container',
  };

  const [showSideBar, setSideBarBool] = useState(false);

  const toggleSideBar = () => setSideBarBool(prevState => !prevState);

  return (
    <div className={styles.container}>
      <SideBar showSideBar={showSideBar} />
      <Dashboard toggleSideBar={toggleSideBar} />
    </div>
  );
};


export default DashboardContainer;
