export const objectIndex = function (content, category) {
  return content.findIndex((obj) => obj.category === category);
};
export const findPriority = function (content, LOAD_PRIORITY) {
  return content.findIndex((obj) => obj.priority === LOAD_PRIORITY);
};
