import React, { useState } from 'react';
import './views/styles/DashboardContainerStyles.scss';
import { Route, Switch } from 'react-router-dom';
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
      <Switch>
        <Route path="/dashboard" render={() => <Dashboard toggleSideBar={toggleSideBar} />} />
        <Route render={() => <h1>Not found</h1>} />
      </Switch>
    </div>
  );
};


export default DashboardContainer;
