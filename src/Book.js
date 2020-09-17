import React from 'react'
import SelectOpt from './SelectOpt'

const Book = (props) =>(
  <li>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 188,
            backgroundImage: `url(${props.book.imageLinks.thumbnail})`
          }} >
        </div>
        <div className="book-shelf-changer">
          <SelectOpt
            book={props.book}
            shelfName={props.shelfName}
            bookOperation={props.bookOperation}
          />
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  </li>
)

export default Book
