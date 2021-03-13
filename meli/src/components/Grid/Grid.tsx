import React from "react";

import Row from "./Row";
import Col from "./Col";
import "./grid.scss";

interface Props {
  className?: string;
  children: (React.ReactChild | null) | (React.ReactChild | null)[];
}

function Grid({ children, className = "" }: Props) {
  return <div className={`container ${className}`}>{children}</div>;
}

Grid.Row = Row;
Grid.Col = Col;

export default Grid;
