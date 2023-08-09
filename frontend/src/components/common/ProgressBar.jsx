import axios from "axios";
import { useEffect, useState } from "react";

export const ProgressBar = ({ item_id }) => {
  const [progress, setProgress] = useState(0);
  // useEffect(() => {
  //   const fetchItemProgress = async () => {
  //     const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/item/${item_id}/progress`);
  //     setProgress(response.data.progress);
  //   };
  //   fetchItemProgress();
  // }, [item_id]);
  return (
    <div className="flex items-center gap-2">
      <div className="h-2 rounded-full min-w-[200px] bg-gray-300">
        <div
          style={{ width: `${progress}%` }}
          className="h-full rounded-full bg-primary-600"
        ></div>
      </div>
      <div>{progress}%</div>
    </div>
  );
};
