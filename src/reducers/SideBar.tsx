const sidebarReducer = (
  state: { isOpenSidebar: boolean } = {
    isOpenSidebar: false
  },
  action: any
) => {
  switch (action.type) {
    case "CHANGE_SIDEBAR":
      return { ...state, isOpenSidebar: action.isOpenSidebar };
    default:
      return state;
  }
};

export default sidebarReducer;
