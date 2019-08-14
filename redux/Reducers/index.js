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
        movieList: action.response.results,
        isLoading: false
      };
      case "CREATE_NEW_MOVIE": {
        let movieList = state.movieList;
        movieList.push(action.response);
        return{
          ...state,
          movieList,
        };
      }
    case "REMOVE_MOVIE": {
      return {
       ...state,
       movieList: state.movieList.filter(movie => movie.id !== action.response)
       };
      } 
      



    default: break;
  }
  return state;
};
export default movieReducer;
