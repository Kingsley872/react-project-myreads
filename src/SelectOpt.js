import React from 'react'

const SelectOpt = (props) => (
  <select defaultValue={props.book.shelf} onChange={(e) => {
      e.preventDefault();
      props.bookOperation(props.book,
                               e.target.value)
    }}>
    <option value="move" disabled>
      Move to...
    </option>
    <option value="currentlyReading">
      Currently Reading
    </option>
    <option value="wantToRead">
      Want to Read
    </option>
    <option value="read">
      Read
    </option>
    <option value="None">
      None
    </option>
  </select>
)

export default SelectOpt
