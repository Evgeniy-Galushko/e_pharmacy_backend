export const calculatePagination = (count, page, perPage) => {
  const totalPage = Math.ceil(count / perPage);
  return {
    page,
    perPage,
    totalItem: count,
    totalPage,
  };
};
