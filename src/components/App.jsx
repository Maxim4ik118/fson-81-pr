import { Component, useState } from 'react';
import booksData from '../data/books.json';
import BookList from './BookList/BookList';
import BookForm from './BookForm/BookForm';
import { nanoid } from 'nanoid';
import { BookSearch } from './BookSearch/BookSearch';
import { SHOW_CRITERIAS } from 'constans/constans';
import { Modal } from './Modal/Modal';

function filterByString(field, filterValue) {
  return field.toLowerCase().trim().includes(filterValue.toLowerCase().trim());
}

function getFilteredBooks(filteredBooks, showBooks) {
  return filteredBooks.filter(book => {
    if (showBooks === SHOW_CRITERIAS.all) {
      return true;
    }
    if (showBooks === SHOW_CRITERIAS.favourites) {
      return book.favourite;
    }
    return true;
  });
}

export const App = () => {
  const [books, setBooks] = useState(booksData.books);
  const [filter, setFilter] = useState('');
  const [showBooks, setShowBooks] = useState(SHOW_CRITERIAS.all);
  const [modal, setModal] = useState({ isOpen: false, modalData: null });

  const onSelectShowBooks = showCriteria => {
    setShowBooks(showCriteria);
  };

  const onDeleteBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId));
  };

  const onAddBook = book => {
    const finalBook = { ...book, id: nanoid() };

    setBooks([finalBook, ...books]);
  };

  const onFilter = e => {
    setFilter(e.target.value);
  };

  const onOpenModal = modalData => {
    setModal({ isOpen: true, modalData });
  };

  const onCloseModal = () => {
    setModal({ isOpen: false, modalData: null });
  };

  const filteredBooks = books.filter(
    book =>
      filterByString(book.title, filter) || filterByString(book.author, filter)
  );
  const filteredBooksWithCriteria = getFilteredBooks(filteredBooks, showBooks);

  return (
    <div className="container">
      <BookForm onAddBook={onAddBook} />
      <BookSearch
        onSelect={onSelectShowBooks}
        onFilter={onFilter}
        filter={filter}
      />
      <BookList
        books={filteredBooksWithCriteria}
        onDelete={onDeleteBook}
        onOpenModal={onOpenModal}
      />
      {modal.isOpen && (
        <Modal onCloseModal={onCloseModal}>
          <img
            className="modal__img"
            src={modal.modalData.cover}
            alt={modal.modalData.title}
          />
          <h3>{modal.modalData.title}</h3>
          <p>{modal.modalData.author}</p>
          <p>{modal.modalData.year}</p>
          <span>{modal.modalData.favourite && '❤️'}</span>
        </Modal>
      )}
    </div>
  );
};
