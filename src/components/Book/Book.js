import React from 'react'
import ApiContext from '../../ApiContext'
import config from '../../config'
import TokenService from '../../services/token-service'
import './Book.css'

export default class Book extends React.Component {
    static contextType = ApiContext
    

    addBook(book){

        const { user_name } = this.context

        fetch(`${config.API_ENDPOINT}/${user_name}/books`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(book)
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
        })
        .finally(alert("Book Added"))
        

        }

    handleAddBook = () => {
        const { user_name } = this.context

        
        const book = {
            user_name: user_name,
            title: this.props.title,
            author: this.props.author[0],
            description: this.props.description,
            urltoimage: this.props.img

        }
        
        this.addBook(book)
        
    }

    handleRemoveBook = () => {
        const { user_name } = this.context 
        const bookId = this.props.id

        fetch(`${config.API_ENDPOINT}/${user_name}/books/${bookId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json'
            },
        })
        .then(res => {
            if(!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res
        })

    }

    render() {
        const { title, img, author, description, date_added } = this.props
    return (
        <li className='book'>

            <h2 className='title'>{title}</h2>
            {!img ? null: <img src={img} alt={title}/>}
            <h3 className='author'>Author: {author}</h3>
            <p className='description'>{description}</p>
            <p>{date_added}</p>
            
            <div className='buttons'>
                <button className='add-book-btn' onClick={this.handleAddBook}>Add Book</button>
                <button className='remove-book-btn' onClick={this.handleRemoveBook}>Remove Book</button>
            </div>
        </li>
        )
    }
}

