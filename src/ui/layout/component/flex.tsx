import React from 'react';
import { LayoutProps } from '../layout.type';

const Flex = ({ children, className }: LayoutProps) => {
  return <div className={`container d-flex  ${className}`}>{children}</div>;
};

export default Flex;
