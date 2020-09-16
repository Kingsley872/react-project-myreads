import React, { Component } from 'react'
import SelectOpt from './SelectOpt'
import BookGrid from './BookGrid'

class ReadList extends Component {
  render() {
    return (
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <BookGrid books={this.props.books} />
          </div>

    )
  }
}

export default ReadList
