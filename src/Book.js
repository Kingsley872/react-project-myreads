import React from 'react'
import SelectOpt from './SelectOpt'

const Book = (props) => {
  let image = '';
  if(typeof(props.book.imageLinks) !== 'undefined'){
    image = props.book.imageLinks.thumbnail;
  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            key={props.book.id}
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${image})`
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
}

export default React.memo(Book);
