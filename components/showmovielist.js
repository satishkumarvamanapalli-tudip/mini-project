import React from "react";
import { Card } from "shards-react";
import { connect } from "react-redux";
import { getMovies, removeMovie ,createNewMovie} from "../redux/actions/index";

class moviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: []
    };
  }

  delHandler = (e, id) => {
    this.props.removeMovie(id);
  };

  componentWillMount() {
    // this.props.fetchMovies();
  }


  componentDidMount() {
    this.props.fetchMovies();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({movieList: nextProps.movieList})
  }

  render() {
    const { isLoading } = this.props;
    const { movieList } = this.state;

    if (isLoading) {
      return <p>loading...</p>;
    }
    return (
      <React.Fragment>
        <h2 className="b1">Movies List</h2>
        <div>
          {movieList.map(movie => {
            const {
              id,
              original_title,
              release_date,
              vote_average,
              vote_count,
              popularity,
              original_language
            } = movie;
            return (
              <Card
                className=" mt-4 text-center p-5"
                style={{
                  maxWidth: "300px",
                  minHeight: "250px",
                  display: "inline-block",
                  margin: "0 0 0 40px",
                  backgroundColor: "#BFC9CA",
                  borderRadius:"20px",
                }}
                key={id}
              >
                <div>
                  <p>Title: {original_title}</p>
                  <br/>
                  <h6>
                    Language: <strong>{original_language}</strong>
                  </h6>
                  <br/>
                  <h6>
                    Popularity: <strong>{popularity}</strong>
                  </h6>
                  <br/>
                  <h6>
                    Voters count: <strong>{vote_count}</strong>
                  </h6>
                  <br/>
                  <h6>
                    Voting Average rating: <strong>{vote_average}</strong>
                  </h6>
                  <br/>
                  <h6>
                    Release Date: <strong>{release_date}</strong>
                  </h6>
                  <br/>
                  <hr/>
                  <input
                    type="button"
                    value="Edit"
                    className="btn btn-primary"
                    onClick={this.editHandler}
                  />
                  &nbsp;&nbsp;&nbsp;
                  <input
                    type="button"
                    value="Delete"
                    className="btn btn-danger"
                    onClick={(e) => this.delHandler(e, id)}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.movie.movieList,
  isLoading: state.movie.isLoading
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: () => dispatch(getMovies()),
  removeMovie: (id) => dispatch(removeMovie(id)),
  createNewMovie: (newMovie) => dispatch(createNewMovie(newMovie))

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(moviesList);
