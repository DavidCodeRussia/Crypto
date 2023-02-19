export const parseQueryParams = (obj) => {
  const queries = [];

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== '') {
      queries.push(`${key}=${obj[key]}`);
    }
  });

  return queries.join('&');
};
