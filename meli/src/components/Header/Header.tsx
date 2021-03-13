import React, { ReactElement } from "react";


import Grid from "../Grid";
import SearchInput from "../SearchInput";

import IconMeli from "../../assets/Logo_ML.png";


import styles from "./header.module.scss";

const { Row, Col } = Grid;

function Header(): ReactElement {
  return (
    <header className={styles.header}>
      <Grid className={styles.container}>
        <Row>
          <Col span={1}>
            <img src={IconMeli} alt="Ícone mercado livre" />
          </Col>
          <Col span={11}>
            <SearchInput />              
          </Col>
        </Row>
      </Grid>
    </header>
  );
}

export default Header;
