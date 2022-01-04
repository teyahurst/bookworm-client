import React, { Component } from 'react'
import Search from '../Search/SearchForm'
import SearchResults from '../Search/SearchResults'
import config from '../../config'
import ApiContext from '../../ApiContext'
import './HomePage.css'


class HomePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            searchTerm: '',
            printType: 'books',
            bookType: 'no-filter',
            bookResults: [],
            err: 'null',
            addBook: {}
        }
    }

    static contextType = ApiContext;

    setSearchTerm(searchTerm){
        this.setState({
            searchTerm
        })
    }


    setBookType(bookType){
        this.setState({
            bookType
        })
    }

    

    handleSubmitSearch(e){
        e.preventDefault()

        let filter = (this.state.bookType !== 'no-filter') ? ('&filter='+this.state.bookType):"";
        let key = config.REACT_APP_API_KEY
        let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}${filter}&maxResults=40&key=${key}`;
        
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw new Error('Something went wrong, please try again later')
                }
                return res.json()
            })

            .then(data => {

                this.setState({
                    bookResults: data.items
                })
            })

            .catch(error => {
                this.setState({
                    error: error.message
                })
            })
    }

    
    
   

    render(){


        return (
            <div className='home-page'>
                <Search
                    handleSubmitSearch={e => this.handleSubmitSearch(e)}
                    setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}
                    setBookType={bookType => this.setBookType(bookType)}
                />

                <div className='info'>
                    <p className='landing-page-txt'>You can search for books by title or author. You can also choose if you would like specific types of books such as excerpts from books, full books, free e-books, paid e-books, or both kinds of e-books. If you would like to save a book, register for a free account. If you already have an account log in to see your saved books. </p>
                    <p className='demo'>Demo account:<br/> Username: Demo<br/> Password: 1!AaBb@2</p>
                </div>

                <SearchResults
                    bookResults={this.state.bookResults}
                />

                
                
            </div>
        )
    }
}

export default HomePage