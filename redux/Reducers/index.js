const initialState = {
  movieList: [],
  isLoading: true
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_MOVIES":
      return {
        ...state,
        movieList: action.response,
        isLoading: false
      };
      case "CREATE_NEW_MOVIE":
        return{
          ...state,
          movieList:action.response,
    };
    case "REMOVE_MOVIE":
      return {
       ...state.filter(pid => pid.id !== action.response.id),
       }; 
      



    default: break;
  }
  return state;
};
export default movieReducer;
