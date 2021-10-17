import React from 'react';

function Search(props){
    return (
        <form onSubmit={e => props.handleSubmitSearch(e)}>
            {/*Search Box */}

            <div className='Search-Box'>
                <label>Search</label>
                <input type='text' onChange={e => props.setSearchTerm(e.target.value)} required />
                <input type='submit' />
            </div>

            {/* filters */}
            <div className='Filter-Box'>
                

                <label htmlFor='Booktype'>Book Type: </label>
                <select id='bookType' onChange={e => props.setBookType(e.target.value)}>
                    <option value='no-filter'>No Filter</option>
                    <option value='partial'>Partial</option>
                    <option value='full'>Full</option>
                    <option value='free-ebooks'>Free E-Books</option>
                    <option value='paid-ebooks'>Paid E-Books</option>
                    <option value='ebooks'>All E-Books</option>
                </select>
            </div>
        </form>
    )
}

export default Search;