import React, { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "@reach/router";

import { getItem } from "../../api";
import Breadcrumb from "../../components/Breadcumber";
import { Item } from "../../types";

import styles from "./product.module.scss";
import Grid from "../../components/Grid";
import { formatCurrency } from "../../utils";

interface Props extends RouteComponentProps {}

interface ProductItem extends Item {
  categories: string[];
  description: string;
  sold_quantity: number;
}

function Product({ location }: Props) {
  const [item, setItem] = useState<ProductItem>();

  const { id } = useParams();

  useEffect(() => {
    async function searchItem() {
      try {
        const { item: itemData } = await getItem(id);

        setItem(itemData);
      } catch (e) {
        console.error(e);
      }
    }

    searchItem();
  }, [id]);

  return (
    <Grid className={styles.product}>
      {item ? (
        <>
          <Breadcrumb categories={item.categories} />
          <div className={styles.productContainer}>
            <div className={styles.productImageContainer}>
              <img
                className={styles.productImage}
                src={item?.picture}
                alt={item?.title}
              />
            </div>
            <div className={styles.infoContainer}>
              <div>
                <span className={styles.productCondition}>
                  {item?.condition} - {item?.sold_quantity} vendidos
                </span>
              </div>
              <div className={styles.productTitleContainer}>
                <span>{item?.title}</span>
              </div>
              <div className={styles.productPriceContainer}>
                <span>
                  {formatCurrency(
                    item?.price.amount as number,
                    item?.price.currency as string
                  )}
                </span>
              </div>
              <button className={styles.productBuyButton}>Comprar</button>
            </div>
          </div>
          <div className={styles.descriptionContainer}>
            <span>Descrição do produto</span>
            <div>
              <p>
                {item.description}
              </p>
            </div>
          </div>
        </>
      ) : null}
    </Grid>
  );
}

export default Product;
