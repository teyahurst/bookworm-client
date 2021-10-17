import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import LoginForm from '../../components/LoginForm/LoginForm'


export default class LoginPage extends Component {


    static contextType = ApiContext;

    handleLoginSuccess = () => {
        
    }

    

    render() {
        return (
            <div className='Login-Page'>
                <h2>Login</h2>
                <LoginForm
                    onLoginSuccess={this.handleLoginSuccess}
                />
            </div>
        )
    }
}