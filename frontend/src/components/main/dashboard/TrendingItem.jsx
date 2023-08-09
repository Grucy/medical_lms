import React from "react";
import TrendingUpIcon from "../../icons/TrendingUpIcon";

function TrendingItem({ children }) {
  return (
    <div className="flex items-center px-2 py-1 gap-1 w-fit rounded-lg font-medium bg-success-50 border-2 border-success-200 text-success-700 hover:font-bold hover:border-success-700 hover:cursor-pointer click-action">
      <TrendingUpIcon className="w"/> {children}
    </div>
  );
}

export default TrendingItem;
