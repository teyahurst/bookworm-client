import React, { Component } from 'react';
import Search from '../Search/SearchForm';
import SearchResults from '../Search/SearchResults';

class HomePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: '',
            printType: 'all',
            bookType: 'no-filter',
            bookResults: [],
            err: 'null',
            myBooks: [],
        }
    }

    setSearchTerm(searchTerm){
        this.setState({
            searchTerm
        })
        console.log(searchTerm)
    }

    setPrintType(printType){
        this.setState({
            printType
        })
    }

    setBookType(bookType){
        this.setState({
            bookType
        })
    }

    handleSubmitSearch(e){
        e.preventDefault();

        let filter = (this.state.bookType !== 'no-filter') ? ('&filter='+this.state.bookType):"";
        let key = ''
        let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}${filter}&key=${key}`;
        console.log(url)

        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw new Error('Something went wrong, please try again later');
                }
                return res.json()
            })

            .then(data => {
                console.log(data)

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

    setAddBook(book){
        this.setState({
            myBooks: book
        })
    }

    render(){
        console.log(this.state)

        return (
            <div className='home-page'>
                <Search
                    handleSubmitSearch={e => this.handleSubmitSearch(e)}
                    setSearchTerm={searchTerm => this.setSearchTerm(searchTerm)}
                    setPrintType={printType => this.setPrintType(printType)}
                    setBookType={bookType => this.setBookType(bookType)}
                />

                <SearchResults
                    bookResults={this.state.bookResults}
                    addBook={this.handleAddBook}
                    removeBook={this.handleRemoveBook}
                />

                
                
            </div>
        )
    }
}

export default HomePage;