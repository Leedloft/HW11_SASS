import React from 'react';
import LogoIcon from './../../shared/images/ozon-logo.png'
import styles from "./style.module.scss";
import {Link} from "react-router-dom";

const Logo = () => {
  return (
    <Link href="#" className={styles.logo} to='/#'>
      <img src={LogoIcon} alt="Ozon Logo" className="logo-icon" />
    </Link>
  );
};

export default Logo;