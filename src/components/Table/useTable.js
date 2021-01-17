import { useState, useEffect } from "react";
import { sortString, sort } from "../../utils";

export const useTable = ({ rawData, users }) => {
  const [data, setData] = useState();
  const [direction, setDirection] = useState("asc");
  const [columnSelected, setColumnSelected] = useState("");

  useEffect(() => {
    if (rawData && users) {
      const rawDataWithUserName = rawData.map((item) => {
        const user = users.find((user) => user.id === item.userId);
        return { ...item, userName: user.name };
      });
      setData(rawDataWithUserName);
    }
  }, [rawData, users]);

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
