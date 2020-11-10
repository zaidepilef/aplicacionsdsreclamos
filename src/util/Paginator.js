export const calculatePages = (count, total) => {
  const pagesNumber = Math.ceil(count / total);
  return pagesNumber;
};
