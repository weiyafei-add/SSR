const defaultStats = {
  name: "SSR-Page",
  newList: [],
};

export default (state = defaultStats, actions) => {
  switch (actions.type) {
    case "update-home-list":
      return {
        ...defaultStats,
        newList: actions.list,
      };
    default:
      return state;
  }
};
