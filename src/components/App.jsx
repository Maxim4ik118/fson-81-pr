import { Component } from 'react';
import books from '../data/books.json';
import BookList from './BookList/BookList';
import BookForm from './BookForm/BookForm';
import { nanoid } from 'nanoid';
import { BookSearch } from './BookSearch/BookSearch';
import { SHOW_CRITERIAS } from 'constans/constans';

function filterByString(field, filterValue) {
  return field.toLowerCase().trim().includes(filterValue.toLowerCase().trim());
}

export class App extends Component {
  state = {
    books: books.books,
    filter: '',
    showBooks: SHOW_CRITERIAS.all, // 'all' | 'favorites'
  };

  onSelectShowBooks = showCriteria => {
    this.setState({
      showBooks: showCriteria,
    });
  };

  onDeleteBook = bookId => {
    this.setState({
      books: this.state.books.filter(book => book.id !== bookId),
    });
  };

  onAddBook = book => {
    const finalBook = { ...book, id: nanoid() };

    this.setState({
      books: [finalBook, ...this.state.books],
    });
  };

  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  render() {
    const filteredBooks = this.state.books.filter(
      book =>
        filterByString(book.title, this.state.filter) ||
        filterByString(book.author, this.state.filter)
    );
    const filteredBooksWithCriteria = filteredBooks.filter(book => {
      if (this.state.showBooks === SHOW_CRITERIAS.all) {
        return true;
      }
      if (this.state.showBooks === SHOW_CRITERIAS.favourites) {
        return book.favourite;
      }
    });

    return (
      <div className="container">
        <BookForm onAddBook={this.onAddBook} />
        <BookSearch
          onSelect={this.onSelectShowBooks}
          onFilter={this.onFilter}
          filter={this.state.filter}
        />
        <BookList
          books={filteredBooksWithCriteria}
          onDelete={this.onDeleteBook}
        />
      </div>
    );
  }
}
