import React from 'react';
import Book from '../Book/Book';
import './SearchResults.css'

function SearchResults(props){

    
    
    return (
        <ul className='book-list'>
            {props.bookResults.map((book, i) => {
                return (
                    <div className='bookResults-book' key={i}>    
                        <Book
                            id={i}
                            key={book.etag}
                            title={book.volumeInfo.title}
                            img={book.volumeInfo.imageLinks?.thumbnail}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            />
                    </div>
                )
            })}
        </ul>
    )
}

export default SearchResults;