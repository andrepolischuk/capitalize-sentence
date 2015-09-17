const regexp = /(:?\.\s?|^)([A-Za-z\u00C0-\u1FFF\u2800-\uFFFD])/gi;

export default input => input
  .toLowerCase()
  .replace(regexp, match => match.toUpperCase());
