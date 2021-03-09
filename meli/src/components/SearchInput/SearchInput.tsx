import React, { ReactElement } from "react";

import Row from "../Grid/Row";

import styles from "./searchInput.module.scss";
import IconSearch from "../../assets/ic_Search2.png";

function SearchInput(): ReactElement {
  return (
    <Row className={styles.searchInput}>
      <input
        className={styles.input}
        placeholder="Nunca deixe de buscar"
        type="text"
      />
      <button className={styles.iconSearch}>
        <img src={IconSearch} alt="Ícone lupa" />
      </button>
    </Row>
  );
}

export default SearchInput;
