import React, { Component } from 'react'
import withTooltip from './withTooltip'
import "./Movie.css"

class Movie extends Component {
  render() {
    return (
        <div>
            <h2 className='title'>Brahmastra</h2>
            {this.props.showTooltip && <div className='tooltip'>It was a good movie with great VFX.</div>}
        </div>
    )
  }
}

export default withTooltip(Movie);