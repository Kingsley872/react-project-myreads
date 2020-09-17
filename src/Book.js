import React, { Component } from 'react'
import SelectOpt from './SelectOpt'

class Book extends Component {

  render() {
    const {
      book,
      shelfName,
      moveToCurrReadingList,
      moveToWanttoReadList,
      moveToReadList,
      deleteBookFromList
    } = this.props;

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 188,
                backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
              }} >
            </div>
            <div className="book-shelf-changer">
              <SelectOpt
                book={book}
                shelfName={shelfName}
                moveToCurrReadingList={moveToCurrReadingList}
                moveToWanttoReadList={moveToWanttoReadList}
                moveToReadList={moveToReadList}
                deleteBookFromList={deleteBookFromList}
              />
            </div>
          </div>
          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
        </div>
      </li>
    )
  }
}

export default Book
