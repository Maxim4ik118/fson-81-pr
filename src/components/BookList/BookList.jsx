import React from 'react';
import PropTypes from 'prop-types';
import { FcViewDetails } from 'react-icons/fc';
import { BsTrash } from 'react-icons/bs';

import style from './BookList.module.css';

const BookList = ({ books, onDelete, onOpenModal }) => {
  return (
    <ul className={style.books__list}>
      {books
        .sort((a, b) => b.favourite - a.favourite)
        .map(book => {
          return (
            <li key={book.id}>
              <div className={style.thumb}>
                <img
                  src={
                    book.cover ??
                    'https://static.yakaboo.ua/media/cloudflare/product/webp/600x840/1/_/1_391_21.jpg'
                  }
                  alt={book.title}
                />
              </div>
              <h3>
                {book.favourite && '❤️'}
                {book.title}
              </h3>
              <h4>{book.author}</h4>
              <p className="">
                {book.year} &#167; {book.genre}
              </p>

              <button
                type="button"
                className={style.show__details}
                onClick={() => onDelete(book.id)}
              >
                Delete book <BsTrash fontSize={'24px'} />
              </button>
              <button
                type="button"
                className={style.show__details}
                onClick={() => onOpenModal(book)}
              >
                See details <FcViewDetails fontSize={'24px'} />{' '}
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
