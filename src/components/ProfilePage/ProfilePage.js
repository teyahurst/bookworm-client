import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import config from '../../config'
import Book from '../Book/Book'
import './ProfilePage.css'

export default class ProfilePage extends Component {
    
    

    static contextType = ApiContext;
    componentDidMount(){
        const { user_name, setUserBooks } = this.context
        
        fetch(`${config.API_ENDPOINT}/${user_name}/books`)
            .then(res => res.json())
            .then(books => {
                setUserBooks(books)
            })
        
    }



   render() {
       const { userBooks } = this.context
       return (
        

           <div className='Profile-Page'>

               {userBooks.map(book => 
               <div className='Profile-Page-Booklist'>
                   <Book key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        img={book.urltoimage}
                        />
                        
                </div>
               )}
               
           </div>
       )
   }
   
}