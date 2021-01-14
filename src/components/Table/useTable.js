import { useState, useEffect } from "react";

export const useTable = ({ rawData }) => {
  const [data, setData] = useState();
  const [direction, setDirection] = useState("asc");

  useEffect(() => {
    setData(rawData);
  }, [rawData]);

  const sort = (key) => {
    let sortedData;

    if (direction === "asc") {
      sortedData = data.sort((a, b) => a[key] - b[key]);
      setDirection("desc");
    } else {
      sortedData = data.sort((a, b) => b[key] - a[key]);
      setDirection("asc");
    }

    setData(sortedData);
  };

  return {
    data,
    sort,
  };
};
