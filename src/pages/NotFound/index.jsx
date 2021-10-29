import React from 'react';
import { BiGhost } from 'react-icons/bi';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './NotFound.module.scss';

const NotFound = ({ msg, noHeight }) => {
  const errContainerStyles = {
    [styles['error-container']]: true,
    [styles['no-height']]: noHeight,
  };

  return (
    <div className={classNames(errContainerStyles)}>
      <div className={styles.error}>
        <BiGhost />
        <br />
        <h1>
          {msg}
          {' '}
          <span>|</span>
        </h1>
      </div>
    </div>
  );
};

export default NotFound;

NotFound.defaultProps = {
  msg: 'not found',
  noHeight: false,
};

NotFound.propTypes = {
  msg: PropTypes.string,
  noHeight: PropTypes.bool,
};
