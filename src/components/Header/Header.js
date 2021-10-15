import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';

export default class Header extends Component{
    handleLogoutClick = () => {   
        TokenService.clearAuthToken() 
    }

    renderLogoutLink() {
        return (
            <div className='Header-logged-in'>
                <Link
                    onClick={this.handleLogoutClick}
                    to='/'>
                        Logout
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='Header-not-logged-in'>
                <Link
                    to='/register'>
                        Register
                </Link>
                <Link
                    to='/login'>
                        Log In
                </Link>
            </div>
        )
    }

    render() {
        return (
            <nav className='Header'>
                <h1>
                    <Link to='/'>
                        BookWorm
                    </Link>
                </h1>
                {TokenService.hasAuthToken()
                  ? this.renderLogoutLink()
                  : this.renderLoginLink()}
            </nav>
        )
    }
}