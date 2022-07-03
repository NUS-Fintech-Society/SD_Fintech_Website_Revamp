import { MaxWidthProps } from "@interfaces/layout/MaxWidth";
import React from "react";

const MaxWidth = ({ children }: MaxWidthProps) => {
  return <div className="mx-auto max-w-main px-4 lg:px-10">{children}</div>;
};

export default MaxWidth;
