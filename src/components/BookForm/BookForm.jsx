import React, { Component } from 'react';

export default class BookForm extends Component {
  state = {
    title: '',
    author: '',
    year: '',
    genre: '',
    favourite: false,
  };

  handleInputChange = ({ target: { value, name, type, checked } }) => {
    if (type === 'checkbox') {
      this.setState({
        [name]: checked,
      });
    } else {
      this.setState({
        [name]: value,
      });
    }
  };

  //   handleAuthorChange = event => {
  //     this.setState({
  //       author: event.target.value,
  //     });
  //   };
  //   handleYearChange = event => {
  //     this.setState({
  //       year: event.target.value,
  //     });
  //   };

  render() {
    return (
      <form>
        <label>
          <b>Title:</b>
          <input
            type="text"
            placeholder="To Kill a Mockingbird"
            required
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <b>Author:</b>
          <input
            type="text"
            placeholder="Harper Lee"
            required
            name="author"
            value={this.state.author}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <b>Year:</b>
          <input
            type="number"
            placeholder="1960"
            required
            name="year"
            value={this.state.year}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <b>Genre:</b>
          <input
            type="text"
            placeholder="novel"
            required
            name="genre"
            value={this.state.genre}
            onChange={this.handleInputChange}
          />
        </label>
        <label>
          <b>Favourite:</b>
          <input
            type="checkbox"
            name="favourite"
            checked={this.state.favourite}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}
