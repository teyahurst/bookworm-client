import React from 'react';
import './SearchForm.css';

function Search(props){
    return (
        <form onSubmit={e => props.handleSubmitSearch(e)} className='search-form'>
           
            {/* filters */}
            
            <div className='Filter-Box'>
                

                
                <select id='bookType' onChange={e => props.setBookType(e.target.value)}>
                    <option value='no-filter'>No Filter</option>
                    <option value='partial'>Partial</option>
                    <option value='full'>Full</option>
                    <option value='free-ebooks'>Free E-Books</option>
                    <option value='paid-ebooks'>Paid E-Books</option>
                    <option value='ebooks'>All E-Books</option>
                </select>      
                
            </div>

             {/*Search Box */}

             <div className='Search-Box'>
                <input className='Search-txt' type='text' placeholder='search'onChange={e => props.setSearchTerm(e.target.value)} required />
                
            </div>

            <button type='submit' className='submit-btn'>Submit</button>

        </form>
    )
}

export default Search;