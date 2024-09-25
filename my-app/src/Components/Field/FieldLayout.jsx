import React from 'react';
import PropTypes from 'prop-types';
import styles from './Field.module.css';

export const FieldLayout = ({ fields, handleClick }) => {
    return (
        <div className={styles.FieldsLayout}>
            {fields.map((field, index) => (
                <div key={index} className={styles.Field} onClick={() => handleClick(index)}>
                    {field}
                </div>
            ))}
        </div>
    );
};

FieldLayout.propTypes = {
    fields: PropTypes.array,
    handleClick: PropTypes.func,
};
