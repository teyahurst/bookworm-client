import React, { Component } from 'react';
import Search from '../Search/SearchForm';
import SearchResults from '../Search/SearchResults';
import config from '../../config'
import ApiContext from '../../ApiContext';


class HomePage extends Component {
    constructor(props){
        super(props);

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
        e.preventDefault();

        let filter = (this.state.bookType !== 'no-filter') ? ('&filter='+this.state.bookType):"";
        let key = config.REACT_APP_API_KEY
        let url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}&printType=${this.state.printType}${filter}&maxResults=40&key=${key}`;
        
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw new Error('Something went wrong, please try again later');
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

                <SearchResults
                    bookResults={this.state.bookResults}
                />

                
                
            </div>
        )
    }
}

export default HomePage;