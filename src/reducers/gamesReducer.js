// Reducers
const initState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case 'FETCH_GAMES':
      return {
        ...state,
        popular: action.payload.popular,
        upcoming: action.payload.upcoming,
        newGames: action.payload.newGames,
      };
    default:
      return { ...state };
  }
};

// Action creator
const fetchGames = () => {
  return {
    type: 'FETCH_GAMES',
  };
};

fetchGames();

export default gameReducer;
