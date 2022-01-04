import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import TokenService from '../../services/token-service'
import ApiContext from '../../ApiContext'
import './Header.css'

export default class Header extends Component{

    static contextType = ApiContext;
    handleLogoutClick = () => {   
        TokenService.clearAuthToken() 
        const isLoggedIn = false
        this.context.setLoginStatus(isLoggedIn)
    }

    
    renderLogoutLink() {
        const { user_name } = this.context;
        return (
            <div className='Header-logged-in'>
                
                    <NavLink
                        onClick={this.handleLogoutClick}
                        to='/'>
                            <button className='logout-btn'>
                                Logout
                            </button>
                    </NavLink>
               
                    <NavLink
                        to={`/${user_name}/books`}>
                            <button className='my-books-btn'>
                                My Books
                            </button>
                    </NavLink>
                
            </div>
        )
    }

    renderLoginLink() {
        return (
            <div className='Header-not-logged-in'>
                
                    <NavLink
                        to='/register'>
                            <button className='register-btn'>
                            Register
                            </button>
                    </NavLink>
                
                    <NavLink
                        to='/login'>
                            <button className='login-btn'>
                                Log In
                            </button>
                    </NavLink>
                
                
            </div>
        )
    }

    render() {
        
        return (
            <nav className='Header'>
                <h1>
                    <NavLink to='/'>
                        BookWorm
                    </NavLink>
                    
                
                {TokenService.hasAuthToken()
                  ? this.renderLogoutLink()
                  : this.renderLoginLink()}

                
                </h1>
            </nav>
        )
    }
}