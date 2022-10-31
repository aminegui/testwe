export const getCharacterIdFromUrl = (url: any) => {
  const id = url.split('/').pop();
  return id;
};
