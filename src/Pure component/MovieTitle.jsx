import React from "react";

class MovieTitle extends React.PureComponent {
  render() {
    console.log("Movie title is rendered.");
    return (
      <p>
        Movie title: <strong>{this.props.title}</strong>
      </p>
    );
  }
}

export default MovieTitle;