import React from "react";
import MovieTitle from "./MovieTitle";

class MovieReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Top Gun: Maverick",
      isWatched: false,
    };
  }

  toggleResponse = () => {
    console.log("Toggled.");
    this.setState((previousState) => ({
      isWatched: !previousState.isWatched,
    }));
  };

  render() {
    const { title, isWatched } = this.state;
    return (
      <>
        <MovieTitle title={title} />
        <p>
          Have you watched the movie ? --{" "}
          <strong>{isWatched ? "YES" : "NO"}</strong>
        </p>
        <button onClick={this.toggleResponse}>Toggle Response</button>
      </>
    );
  }
}

export default MovieReview;