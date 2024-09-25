import React from 'react';
import PropTypes from 'prop-types';
import styles from './Information.module.css';

export const InformationLayout = ({ children }) => (
    <div className={styles.Information}>{children}</div>
);

InformationLayout.propTypes = {
    children: PropTypes.string,
};
