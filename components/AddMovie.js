import React from "react";
import { Card } from "shards-react";
import {connect} from 'react-redux';
import { compose } from 'redux';
import { withRouter } from "react-router-dom";
import { createNewMovie } from "../redux/actions/index";
import "bootstrap/dist/css/bootstrap.min.css";
//import "shards-ui/dist/css/shards.min.css";

class AddMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      original_title: "",
      release_date: "",
      vote_average: "",
      vote_count: "",
      popularity: "",
      original_language: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    console.log("new -----------",nextProps);
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    this.props.createNewMovie(this.state);
    // this.props.history.push("/MovieList");
  }
  render() {
    return (
      <Card className=" mt-4 text-center p-5" style={{maxWidth: "480px",minHeight: "250px",textAlign: "center",margin: "auto"}}>
        <div>
          <div>
            <strong>Add Movie</strong>
          </div>
            <form onSubmit={this.onSubmit}>
            <table>
              <tbody>
              <tr>
                <td>
                  <span>ID : </span>
                </td>
                <td>
                  <input
                    type="text"
                    name="id"
                    style={{ borderRadius: "20px" }}
                    value={this.state.id}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>title : </span>
                </td>
                <td>
                  <input
                    type="text"
                    name="original_title"
                    style={{ borderRadius: "20px" }}
                    value={this.state.original_title}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Language : </span>
                </td>
                <td>
                  <input
                    type="text"
                    name="original_language"
                    style={{ borderRadius: "20px" }}
                    value={this.state.original_language}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>popularity :</span>
                </td>
                <td>
                  <input
                    type="text"
                    name="popularity"
                    style={{ borderRadius: "20px" }}
                    value={this.state.popularity}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Voters count : </span>
                </td>
                <td>
                  <input
                    type="text"
                    name="vote_count"
                    style={{ borderRadius: "20px" }}
                    value={this.state.vote_count}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
               <td>
                  <span>Voting average : </span>
                </td>
                <td>
                  <input
                    type="text"
                    name="vote_average"
                    style={{ borderRadius: "20px" }}
                    value={this.state.vote_average}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <span>Release Data : </span>
                </td>
                <td>
                  <input
                    type="Date"
                    name="release_date"
                    style={{ borderRadius: "20px" }}
                    value={this.state.release_date}
                    onChange={this.onChange}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input type="submit"/>
                </td>
                <td>
                  <input type="reset"/>
                </td>
              </tr>
              </tbody>
            </table>
          </form>
        </div>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  movieList: state.movie.movieList,
});

const mapDispatchToProps = dispatch => ({
  createNewMovie: (newMovie) => dispatch(createNewMovie(newMovie))
});

export default compose(withRouter, connect(
  mapStateToProps,
  mapDispatchToProps
))(AddMovie);