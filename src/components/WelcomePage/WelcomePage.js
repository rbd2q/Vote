import React from 'react';
import styles from './WelcomePage.module.scss'

const WelcomePage = () => {
  return (
    <div className={styles.contentWrapper}>
      <h1>To see List of candidates press "Show candidates" button</h1>
      <h1>To make your own vote press "Vote" button</h1>
    </div>
  );
};

export default WelcomePage;