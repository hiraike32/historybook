const topBackgroundReducer = (
  state: { animes: string[] } = {
    animes: []
  },
  action: any
) => {
  switch (action.type) {
    case "INIT_BGACTION":
      return { ...state, animes: action.animes };
    default:
      return state;
  }
};

export default topBackgroundReducer;
