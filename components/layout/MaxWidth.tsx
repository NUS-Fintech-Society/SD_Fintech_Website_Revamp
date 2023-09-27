import { MaxWidthProps } from '@interfaces/layout/MaxWidth';
import React from 'react';

const MaxWidth = ({ children }: MaxWidthProps) => {
  return (
    <div className="mx-auto flex max-w-main px-6 sm:px-28">{children}</div>
  );
};

export default MaxWidth;
