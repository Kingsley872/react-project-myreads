import React from 'react'

const SelectOpt = (props) => (
  <select onChange={(e) => {
      e.preventDefault();
      props.bookOperation(props.book,
                               e.target.value)
    }}>
    <option value="move" selected disabled>Move to...</option>
    <option
      value="currentlyReading"
      disabled={props.shelfName==='Currently Reading'}
    >Currently Reading</option>
    <option
      value="wantToRead"
      disabled={props.shelfName==='Want to Read'}
    >Want to Read</option>
    <option
      value="read"
      disabled={props.shelfName==='Read'}
    >Read</option>
    <option value="none">None</option>
    </select>
)

export default SelectOpt
