import React, { Component } from 'react'
import SelectOpt from './SelectOpt'
import BookGrid from './BookGrid'

class WantToReadList extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Want to Read</h2>
        <BookGrid books={this.props.books} />
      </div>
    )
  }
}

export default WantToReadList
