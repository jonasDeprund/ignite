// Reducers
const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state };
    default:
      return { ...state };
  }
};

// Action creator
const fetchGames = () => {
  return {
    type: "FETCH_GAMES",
  };
};

fetchGames();

export default gameReducer;
