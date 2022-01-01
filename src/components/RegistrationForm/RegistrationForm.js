import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

export default class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    state = { error: null }

    handleFormSubmission = e => {
        e.preventDefault()
        const { full_name, nickname, user_name, password } = e.target

        this.setState({ error: null })
        AuthApiService.postUser({
            user_name: user_name.value,
            password: password.value,
            full_name: full_name.value,
            nickname: nickname.value, 
        })
        .then(user => {
            full_name.value=''
            nickname.value = ''
            user_name.value = ''
            password.value = ''
            this.props.history.push('/login')
        })
        .catch(res => {
            this.setState({ error: res.error })
        })

        
    }

    render() {
        const { error } = this.state
        return (
            <div class='registration-form'>
                <div className='form-header'>
                    <h2>Create Account</h2>
                </div>

                    <form 
                        className='RegistrationForm'
                        onSubmit={this.handleFormSubmission}
                    >
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>

                        <div className='full_name'>

                            <input
                                name='full_name'
                                type='text'
                                required
                                id='RegistrationForm_full_name'
                                placeholder='Full Name'>
                            </input>
                        </div>

                        <div className='user_name'>
                            <input 
                                name='user_name'
                                type='text'
                                required
                                id='RegistrationForm_user_name'
                                placeholder='User Name'>
                            </input>
                        </div>

                        <div className='password'>
                            
                            <input
                                name='password'
                                type='password'
                                required
                                id='RegistrationForm_password'
                                placeholder='Password'/>
                            
                        </div>

                        <div className='nick_name'>
                            

                            <input 
                                name='nickname'
                                type='text'
                                required
                                id='RegistrationForm_nick_name'
                                placeholder='Nick Name'>
                            </input>
                        </div>
                        
                        <button type='submit'>
                            Register
                        </button>
                    </form>
            </div>
        )
    }
}