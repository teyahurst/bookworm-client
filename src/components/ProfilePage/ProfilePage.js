import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import config from '../../config'
import Book from '../Book/Book'

export default class ProfilePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            myBooks: [],
        }
    }
    

    static contextType = ApiContext;
    componentDidMount(){
        const { user_name } = this.context
        
        fetch(`${config.API_ENDPOINT}/${user_name}/books`)
            .then(res => res.json())
            .then(books => {
                this.setState({
                    myBooks: books,
                })
            })
        
    }



   render() {
       console.log(this.state.myBooks)
       return (
           <div className='Profile-Page'>

               {this.state.myBooks.map(book => 
               <div>
                   <Book
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                        img={book.img}
                        />
                        
                </div>
               )}
               
           </div>
       )
   }
   
}