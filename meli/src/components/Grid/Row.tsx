import React, { ReactElement } from "react";

import "./grid.scss";

interface Props {
  className?: string;
  children: React.ReactChild | React.ReactChild[] | null;
}

function Row({ children, className = "" }: Props): ReactElement {
  return <div className={`row ${className}`}>{children}</div>;
}

export default Row;
