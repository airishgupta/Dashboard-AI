import React from 'react';
import PropTypes from 'prop-types';
import '../styles/DashboardStyles.scss';
import Team from './Team';
import ManagersActivity from './ManagersActivity';
import NavBar from './NavBar';

const Dashboard = ({ toggleSideBar }) => {
  const styles = {
    wrapper: 'dv2__dashboard__wrapper',
    detailsSection: 'dv2__dashboard__details-section',
  };

  return (
    <div className={styles.wrapper}>
      <NavBar toggleSideBar={toggleSideBar} />
      <div className={styles.detailsSection}>
        <Team />
        <ManagersActivity />
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  toggleSideBar: PropTypes.func.isRequired,
};

export default Dashboard;
