import React from 'react';
import PropTypes from 'prop-types';

const Title = ({ title }) => (
  <h2 className="section-title" style={{ fontSize: '3rem' }}>
    {title}
  </h2>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
