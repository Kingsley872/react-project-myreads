import React, { Component } from 'react'
import BookGrid from './BookGrid'

class BookShelf extends Component {
  render() {
    const {
      books,
      shelfName,
      moveToCurrReadingList,
      moveToWanttoReadList,
      moveToReadList,
      deleteBookFromList
    } = this.props;

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <BookGrid
          books={books}
          shelfName={shelfName}
          moveToCurrReadingList={moveToCurrReadingList}
          moveToWanttoReadList={moveToWanttoReadList}
          moveToReadList={moveToReadList}
          deleteBookFromList={deleteBookFromList}
        />
      </div>
    )
  }
}

export default BookShelf
