import React, { ReactElement } from "react";
import { Link } from '@reach/router'

import { Item } from "../../types";
import Row from "../Grid/Row";
import Col from "../Grid/Col";
import iconShipping from "../../assets/ic_shipping.png";

import styles from "./itemResult.module.scss";
import { formatCurrency } from "../../utils";

interface Props {
  item: Item;
}

function ItemResult({ item }: Props): ReactElement {
  return (
    <li>
      <Link className={styles.itemResult} to={`${item.id}`}>
        <img
          className={styles.productPicture}
          src={item.picture}
          alt={item.title}
        />
        <Row className={styles.itemDescriptionContainer}>
          <Col span={9} className={styles.itemPriceContainer}>
            <div>
              <span className={styles.price}>
                {formatCurrency(item.price.amount, item.price.currency)}
              </span>
              {item.free_shipping ? (
                <img
                  className={styles.iconFreeShipping}
                  src={iconShipping}
                  alt="Ícone frete grátis"
                />
              ) : null}
            </div>
            <span className={styles.title}>{item.title}</span>
          </Col>
          <Col className={styles.cityContainer} span={3}>
            <div>{item.city}</div>
          </Col>
        </Row>
      </Link>
    </li>
  );
}

export default ItemResult;
