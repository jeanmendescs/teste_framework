export const sortString = (key, direction, data) => {
  let sortedData;

  if (direction === "asc") {
    sortedData = data.sort((a, b) => {
      if (a[key] > b[key]) {
        return 1;
      }
      if (a[key] < b[key]) {
        return -1;
      }
      return 0;
    });
  } else {
    sortedData = data.sort((a, b) => {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    });
  }

  return sortedData;
};

export const sort = (key, direction, data) => {
  let sortedData;

  if (direction === "asc") {
    sortedData = data.sort((a, b) => a[key] - b[key]);
  } else {
    sortedData = data.sort((a, b) => b[key] - a[key]);
  }

  return sortedData;
};
