import React from "react";

function QuickAccess() {
  return (
    <div className="p-2 border-2 border-dashed rounded-lg flex flex-col justify-center items-center hover:cursor-pointer group click-action hover:shadow-lg hover:shadow-primary-300">
      <div className="w-9 h-9 m-1 rounded-full border-4 border-gray-50 bg-gray-100 text-xs flex justify-center items-center group-hover:border-primary-200 group-hover:bg-primary-600 group-hover:text-white">        +
      </div>
      <div className="text-center text-xs group-hover:text-primary-600">Ajoute une matière ou un item</div>
    </div>
  );
}

export default QuickAccess;
