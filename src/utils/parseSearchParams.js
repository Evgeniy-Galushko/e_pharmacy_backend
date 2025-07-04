const parseSearch = (search) => {
  const isString = typeof search === 'string';
  if (!isString) return;

  return search;
};

export const parseSearchParams = (query) => {
  const { search } = query;

  const parsedSearch = parseSearch(search);

  return { search: parsedSearch };
};
