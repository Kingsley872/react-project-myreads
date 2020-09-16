import React, { Component } from 'react'

class SelectOpt extends Component {

  handleSubmit = e => {
    e.preventDefault();
    switch (e.target.value) {
      case 'currentlyReading':
        this.props.moveToCurrReadingList(this.props.book, this.props.shelfName);
        break;
      case 'wantToRead':
        this.props.moveToWanttoReadList(this.props.book);
        break;
      case 'read':
        this.props.moveToReadList(this.props.book);
        break;
      default:
        break;
    }
    this.props.deleteBookFromList(this.props.book, this.props.shelfName);
  }

  render() {
    const {
      book,
      shelfName,
    } = this.props;

    return (
      <select onChange={this.handleSubmit}>
        <option value="move" selected disabled>Move to...</option>
        <option
          value="currentlyReading"
          disabled={shelfName==='Currently Reading'}
        >Currently Reading</option>
        <option
          value="wantToRead"
          disabled={shelfName==='Want to Read'}
        >Want to Read</option>
        <option
          value="read"
          disabled={shelfName==='Read'}
        >Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default SelectOpt
