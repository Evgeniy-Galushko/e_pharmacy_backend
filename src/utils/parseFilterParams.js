const parseType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;

  const isType = (type) =>
    [
      'medicine',
      'heart',
      'head',
      'hand',
      'leg',
      'skin care',
      'dental care',
    ].includes(type.toLowerCase());

  if (isType(type)) return type;
};

export const parseFilterParams = (query) => {
  const { type } = query;

  const parsedType = parseType(type);
  return { type: parsedType };
};
