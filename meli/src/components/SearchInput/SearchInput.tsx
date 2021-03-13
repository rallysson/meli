import React, { ReactElement, useState } from "react";
import { navigate } from "@reach/router";

import Row from "../Grid/Row";

import styles from "./searchInput.module.scss";
import IconSearch from "../../assets/ic_Search2.png";

function SearchInput(): ReactElement {
  const [search, setSearch] = useState("");

  return (
    <Row className={styles.searchInput}>
      <input
        className={styles.input}
        placeholder="Nunca deixe de buscar"
        type="text"
        onKeyPress={(e) =>
          e.key === "Enter" && navigate(`/items?search=${search}`)
        }
        onChange={(e) => setSearch(e.target.value)}
      />
      <button
        onClick={() => navigate(`/items?search=${search}`)}
        className={styles.iconSearch}
      >
        <img src={IconSearch} alt="Ícone lupa" />
      </button>
    </Row>
  );
}

export default SearchInput;
