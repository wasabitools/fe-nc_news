export const formatDate = date => {
  return new Date(date).toString().slice(0, 24);
};
