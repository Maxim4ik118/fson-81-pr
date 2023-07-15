import React from 'react';
import PropTypes from 'prop-types';

const BookList = ({ books, onDelete }) => {
  return (
    <ul>
      {books
        .sort((a, b) => b.favourite - a.favourite)
        .map(book => {
          return (
            <li key={book.id}>
              <img
                src={
                  book.cover ??
                  'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/1/_/1_391_21.jpg'
                }
                alt={book.title}
              />
              <h3>
                {book.favourite && '❤️'}
                {book.title}
              </h3>
              <h4>{book.author}</h4>
              <p className="">
                {book.year} &#167; {book.genre}
              </p>

              <button type="button" onClick={() => onDelete(book.id)}>
                &times; Delete book
              </button>
            </li>
          );
        })}
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      favourite: PropTypes.bool,
      cover: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
