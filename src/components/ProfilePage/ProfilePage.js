import React, { Component } from 'react'

export default class ProfilePage extends Component {
    constructor(props){
        super(props)

        this.state = {
            myBooks: [],
        }
    }


    componentDidMount(){
        this.setState({
            myBooks: ['Harry Potter', 'Lord of the Rings']
        })
    }

   render() {
       return (
           <div className='Profile-Page'>
               <p>This is my profile page</p>
           </div>
       )
   }
   
}