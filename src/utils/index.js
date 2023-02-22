export const parseQueryParams = (obj) => {
  const queries = [];

  Object.keys(obj).forEach((key) => {
    if (obj[key] !== undefined && obj[key] !== null && obj[key] !== "") {
      queries.push(`${key}=${obj[key]}`);
    }
  });
  console.log("queries.join('&')", queries.join("&"));
  return queries.join("&");
};
