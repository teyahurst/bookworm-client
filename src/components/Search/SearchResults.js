import React from 'react';
import Book from '../Book/Book';

function Results(props){
    console.log(props)

    return (
        <ul className='book-list'>
            {props.bookResults.map(book => {
                return (<Book
                            key={book.etag}
                            title={book.volumeInfo.title}
                            img={book.volumeInfo.imageLinks?.thumbnail}
                            author={book.volumeInfo.authors}
                            description={book.volumeInfo.description}
                            />
                )
            })}
        </ul>
    )
}

export default Results;