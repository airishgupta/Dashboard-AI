import React from 'react';
import { IoIosClose } from 'react-icons/io';

import Pill from './Pill';
import '../styles/ManagersActivityStyles.scss';

const ManagersActivity = () => {
  const styles = {
    container: 'dv2__dashboard-managers-activity__container',
    topBar: 'dv2__dashboard-managers-activity__top-bar',
    pillContainer: 'dv2__dashboard-managers-activity__pill-container',
    managerReport: 'dv2__dashboard-managers-activity__report',
  };

  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <span>Managers Activity</span>
        <IoIosClose size={18} />
      </div>
      <div className={styles.pillContainer}>
        <Pill content="February" />
        <Pill content="Incoming Phone Calls" />
      </div>
      <img
        className={styles.managerReport}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIAX9tK81ZNi3zT1m0e_F6rAuDpOwGftNWHcvd83lcql0ACKBR"
        alt="manager report"
      />
    </div>
  );
};

export default ManagersActivity;
