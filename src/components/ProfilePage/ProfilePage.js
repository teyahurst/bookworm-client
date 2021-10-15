import React, { Component } from 'react'

export default class ProfilePage extends Component {
    


    componentDidMount(){
        this.setState({
            myBooks: ['Harry Potter', 'Lord of the Rings']
        })

        //put fetch request for my books here
    }

   render() {
       return (
           <div className='Profile-Page'>
               <p>My Books: </p>
               
           </div>
       )
   }
   
}