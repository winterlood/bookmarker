export const isSiteLink = (text: string) => {
  return /(http(s?)):\/\//i.test(text);
};
