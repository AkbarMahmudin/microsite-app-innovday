// excerpt strings from a format string
export const fExcerpt = (str: string, length: number = 100) => {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
};
