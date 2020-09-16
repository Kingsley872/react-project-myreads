import React, { Component } from 'react'
import SelectOpt from './SelectOpt'
import BookGrid from './BookGrid'

class CurrReadingList extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
          <BookGrid books={this.props.books} />
      </div>
    )
  }
}

export default CurrReadingList
