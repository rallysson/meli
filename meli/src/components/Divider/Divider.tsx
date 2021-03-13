import React, { ReactElement } from "react";
import styles from './divider.module.scss'

interface Props {}


function Divider({}: Props): ReactElement {
  return <div className={styles.divider} />;
}

export default Divider;
