import React from "react";

function RecentItem({ children }) {
  return (
    <div className="flex items-center px-4 py-1 gap-1 w-fit rounded-lg font-medium text-lg border-2 border-gray-300 text-gray-600 hover:font-semibold hover:border-primary-600 hover:text-primary-600 hover:cursor-pointer hover:bg-primary-100 click-action">
      {children}
    </div>
  );
}

export default RecentItem;
