import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import ApiContext from '../../ApiContext'
import './LoginForm.css'

export default class LoginForm extends Component {
    static contextType = ApiContext;
    static defaultProps = {
        onLoginSuccess: () => {
        }
    }

    state = { error: null }

    handleSubmitJwtAuth = event => {
        event.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = event.target
        this.context.setUserName(user_name.value)
        const isLoggedIn = true
        

        AuthApiService.postLogin({
            user_name: user_name.value,
            password: password.value,
        })
        .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.context.setLoginStatus(isLoggedIn)
            this.props.history.push(`/`)
        })
        .catch(res => {
            this.setState({ error: res.error })
            
        })
        
    }

    render() {
        const { error } = this.state
        return (
            <div className='login-form'>
                <div className='login-form-header'>
                    <h2>Login</h2>
                </div>

                    <form 
                        className='LoginForm'
                        onSubmit={this.handleSubmitJwtAuth}
                        >
                            <div role='alert'>
                                {error && <p className='red'>{error}</p>}
                            </div>

                            <div className='user_name'>
                                

                                <input 
                                    name='user_name'
                                    id='LoginForm_user_name'
                                    placeholder='User Name'>
                                </input>
                            </div>

                            <div className='password'>
                                
                                
                                <input 
                                    name='password'
                                    type='password'
                                    id='LoginForm_password'
                                    placeholder='Password'>
                                </input>
                            </div>

                            <button type='submit'>
                                Login
                            </button>
                    </form>
            </div>
        )
    }
}