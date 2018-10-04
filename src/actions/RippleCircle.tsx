export const addCircle = (id: number) => {
  return {
    id,
    type: "ADD_CIRCLE"
  };
};

export const removeCircle = (id: number) => {
  return {
    id,
    type: "REMOVE_CIRCLE"
  };
};
