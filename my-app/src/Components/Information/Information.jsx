import React from 'react';
import PropTypes from 'prop-types';
import { InformationLayout } from './InformationLayout';

export const Information = (props) => <InformationLayout {...props} />;

Information.propTypes = {
    props: PropTypes.object,
};
