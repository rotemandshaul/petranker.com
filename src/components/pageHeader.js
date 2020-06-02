import React from 'react';
import PropTypes from 'prop-types';

const PageHeader = ({ headerText }) => {
  return (
    <div>
      <h2>{headerText}</h2>
    </div>
  );
};

PageHeader.propTypes = {
  headerText: PropTypes.string,
};

export default PageHeader;
