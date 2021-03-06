import React from 'react';
import PropTypes from 'prop-types';

import Container from '@/assets/styles/container';

const LeafIconComponent = ({ fillColor, size }) => (
  <Container size={size}>
    <svg viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.143 27.5802C29.7997 26.9182 29.4687 26.2811 29.4687 26.2811C30.3622 20.9111 27.5908 14.1097 23.0654 10.4277C17.0426 5.52934 7.88437 9.08726 0.75301 1.64045C-0.909872 -0.0971382 0.0580743 21.1263 8.98469 29.1688C15.5121 35.0435 23.1978 33.2397 25.3074 32.2799C27.2185 31.4029 28.5587 29.8059 28.5587 29.8059C32.0417 30.8816 33.7625 30.8154 33.7625 30.8154C34.9869 30.9643 35.6073 27.8036 34.143 27.5802ZM26.1927 27.9443C14.7593 24.5602 6.16364 12.6784 6.16364 12.6784C6.16364 12.6784 13.7087 21.5897 27.0117 25.9337C27.0283 26.6039 26.6311 27.5637 26.1927 27.9443Z"
        fill={fillColor}
      />
    </svg>
  </Container>
);

LeafIconComponent.propTypes = {
  fillColor: PropTypes.string,
  size:      PropTypes.string,
};

LeafIconComponent.defaultProps = {
  fillColor: 'white',
  size:      '35px',
};

export default LeafIconComponent;
