import React from 'react';
import { IoIosClose } from 'react-icons/io';

import '../styles/Team.scss';

const teamMembers = [
  { name: 'Jack Williams', position: 'Developer', icon: 'https://demos.subinsb.com/isl-profile-pic/image/person.png' },
  { name: 'Kate Bekinsale', position: 'UI Developer', icon: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg' },
  { name: 'Mickey Thompson', position: 'QA Developer', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREnQDi2zQUYvcXzCm0P49pBcaJ0VffnK4oW3hG0u79NB3ZXS7Lw' },
];

const Team = () => {
  const styles = {
    container: 'dv2__dashboard-team__container',
    topBar: 'dv2__dashboard-team__top-bar',
    userContainer: 'dv2__dashboard-team__user-container',
    userImage: 'dv2__dashboard-team__user-image',
    userInfo: 'dv2__dashboard-team__user-info',
  };
  return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <span>Involved Team</span>
        <IoIosClose size={18} />
      </div>
      <div>
        {teamMembers.map(member => (
          <div className={styles.userContainer}>
            <div>
              <img className={styles.userImage} src={member.icon} alt="user image" />
            </div>
            <div className={styles.userInfo}>
              <span>{member.name}</span>
              <span>{member.position}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Team;
