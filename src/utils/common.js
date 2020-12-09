export const groupBy = (items, iteratee) =>
  items.reduce((acc, item) => {
    const index = item[iteratee];
    const seasonItems = acc[index] ? [...acc[index], item] : [item];
    acc[index] = seasonItems;

    return acc;
  }, {});
