import React, { useState } from 'react';

export default function BookForm({ onAddBook }) {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    year: '',
    genre: '',
    favourite: false,
  });

  const handleInputChange = ({ target: { value, name, type, checked } }) => {
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  //   handleAuthorChange = event => {
  //     setState({
  //       author: event.target.value,
  //     });
  //   };
  //   handleYearChange = event => {
  //     setState({
  //       year: event.target.value,
  //     });
  //   };

  const handleSubmit = e => {
    e.preventDefault();

    const bookData = { ...formData, year: Number.parseInt(formData.year) };
    onAddBook(bookData);
    setFormData({
      title: '',
      author: '',
      year: '',
      genre: '',
      favourite: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <b>Title:</b>
        <input
          type="text"
          placeholder="To Kill a Mockingbird"
          required
          name="title"
          value={formData.title}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <b>Author:</b>
        <input
          type="text"
          placeholder="Harper Lee"
          required
          name="author"
          value={formData.author}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <b>Year:</b>
        <input
          type="number"
          placeholder="1960"
          required
          name="year"
          value={formData.year}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <b>Genre:</b>
        <input
          type="text"
          placeholder="novel"
          required
          name="genre"
          value={formData.genre}
          onChange={handleInputChange}
        />
      </label>
      <label>
        <b>Favourite:</b>
        <input
          type="checkbox"
          name="favourite"
          checked={formData.favourite}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Add book</button>
    </form>
  );
}
