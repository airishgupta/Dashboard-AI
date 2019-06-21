import React from 'react';
import PropTypes from 'prop-types';

import '../styles/PillStyles.scss';

const Pill = ({ content }) => {
  const styles = {
    container: 'dv2__dashboard-pill__container',
  };

  return (
    <div className={styles.container}>
      <span>{content}</span>
    </div>
  );
};

Pill.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Pill;
