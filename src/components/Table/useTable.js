import { useState, useEffect } from "react";
import { sortString, sort } from "../../utils";

export const useTable = ({ rawData }) => {
  const [data, setData] = useState();
  const [direction, setDirection] = useState("asc");
  const [columnSelected, setColumnSelected] = useState("");

  useEffect(() => {
    setData(rawData);
  }, [rawData]);

  const handleSort = (key) => {
    let sortedData;

    if (typeof data[0][key] === "string") {
      sortedData = sortString(key, direction, data);
    } else {
      sortedData = sort(key, direction, data);
    }

    setDirection(direction === "asc" ? "desc" : "asc");
    setData(sortedData);
    setColumnSelected(key);
  };

  return {
    data,
    handleSort,
    direction,
    columnSelected,
  };
};
