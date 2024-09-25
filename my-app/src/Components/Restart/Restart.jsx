import React from 'react';
import PropTypes from 'prop-types';
import styles from './Restart.module.css';

export const Restart = ({ isGameEnded, handleRestart }) => (
    <button className={styles.Restart} disabled={!isGameEnded} onClick={handleRestart}>
        Начать заново
    </button>
);

Restart.propTypes = {
    isGameEnded: PropTypes.bool,
    handleRestart: PropTypes.func,
};
