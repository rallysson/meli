import React, { Fragment, ReactElement, useEffect, useState } from "react";
import { RouteComponentProps } from "@reach/router";

import { getItems } from "../../api";
import { Item } from "../../types";
import Grid from "../../components/Grid";
import styles from "./productList.module.scss";
import ItemResult from "../../components/ItemResult";
import Divider from "../../components/Divider";

interface Props extends RouteComponentProps {}

function ProductList({ location }: Props): ReactElement {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    async function searchItems() {
      const params = new URLSearchParams(location?.search);

      try {
        const { items: itemsData } = await getItems(
          params.get("search") as string
        );

        setItems(itemsData);
      } catch (e) {
        console.error(e);
      }
    }

    searchItems();
  }, [location?.search]);

  return (
    <Grid className={styles.productList}>
      <ul>
        {items.map((item, idx) => (
          <Fragment key={item.id}>
            <ItemResult item={item} />
            {idx + 1 !== items.length ? <Divider /> : null}
          </Fragment>
        ))}
      </ul>
    </Grid>
  );
}

export default ProductList;
