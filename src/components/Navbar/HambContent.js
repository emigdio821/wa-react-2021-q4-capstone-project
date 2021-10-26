import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { BiX, BiHomeHeart } from "react-icons/bi";
import styles from "./Navbar.module.scss";

const HambContent = ({ show, callback, children }) => {
  const hambMenuStyles = {
    [styles["hamb__menu-container"]]: true,
    [styles["show__hamb-menu"]]: show,
  };

  return (
    <div className={classNames(hambMenuStyles)}>
      <div className={styles["main-navbar"]}>
        <div className={`${styles["logo"]} ${styles["uppercase"]}`}>
          <BiHomeHeart role="img" />
          <span>
            ・The<span className={styles["bold-font"]}>cool</span>house
          </span>
        </div>
        <div className={styles["hamb__icon-container"]}>
          <BiX className={styles["hamb__close-icon"]} onClick={callback} />
        </div>
      </div>
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default HambContent;

HambContent.propTypes = {
  show: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};
