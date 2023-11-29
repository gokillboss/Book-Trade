import React from 'react';
import { useParams } from 'react-router-dom';

function FilterPage() {
  let { genre } = useParams();
  const filteredBooks = books.filter(book => book.genre === genre);

  return (
    <div>
      <h1>Books in {genre} Genre</h1>
      {filteredBooks.map((book, index) => (
        <div key={index}>
          <h3>{book.title}</h3>
          <p>Author: {book.author}</p>
        </div>
      ))}
    </div>
  );
}

export default FilterPage;
