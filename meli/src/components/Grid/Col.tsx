import React, { ReactElement } from "react";

import "./grid.scss";

interface Props {
  className?: string;
  children: React.ReactChild | (React.ReactChild | null)[];
  span: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

function Col({ span, children, className = "" }: Props): ReactElement {
  return <div className={`col-${span} ${className}`}>{children}</div>;
}

export default Col;
