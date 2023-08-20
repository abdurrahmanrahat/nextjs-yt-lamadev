import React from "react";

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      <h1 className="text-7xl font-semibold">Our Works</h1>
      {children}
    </div>
  );
};

export default PortfolioLayout;
