import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'

export default class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {
        }
    }

    state = { error: null }

    handleSubmitJwtAuth = event => {
        event.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = event.target

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })
    }

    render() {
        const { error } = this.state
        return (
            <form 
                className='LoginForm'
                onSubmit={this.handleSubmitJwtAuth}
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