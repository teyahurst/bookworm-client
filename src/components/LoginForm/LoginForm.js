import React, { Component } from 'react'
import TokenService from '../../services/token-service'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
    }

    state = { error: null }

    handleSubmitBasicAuth = e => {
        e.preventDefault()
        const { user_name, password } = e.target

        console.log('login form submitted')
        console.log({ user_name, password })

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(user_name.value, password.value)
        )

        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()

    }

    render() {
        const { error } = this.state
        return (
            <form 
                className='LoginForm'
                onSubmit={this.handleSubmitBasicAuth}
                >
                    <div role='alert'>
                        {error && <p className='red'>{error}</p>}
                    </div>

                    <div className='user_name'>
                        <label htmlFor='LoginForm_user_name'>
                            Username
                        </label>

                        <input 
                            name='user_name'
                            id='LoginForm_user_name'>
                        </input>
                    </div>

                    <div className='password'>
                        <label htmlFor='LoginForm_password'>
                            Password
                        </label>
                        
                        <input 
                            name='password'
                            type='password'
                            id='LoginForm_password'>
                        </input>
                    </div>

                    <button type='submit'>
                        Login
                    </button>
            </form>
        )
    }
}