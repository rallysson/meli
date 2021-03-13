import React, { Fragment, ReactElement } from "react";

import styles from "./breadcumb.module.scss";

interface Props {
  categories: string[];
}

function Breadcrumb({ categories }: Props): ReactElement {
  return (
    <div className={styles.breadcrumb}>
      <div>
        {categories.map((category, idx) => (
          <Fragment key={category}>
            <span> {category} </span>
            {idx + 1 !== categories.length && <span>{">"}</span>}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Breadcrumb;
