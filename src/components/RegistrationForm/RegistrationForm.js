import React, { Component } from 'react';
import AuthApiService from '../../services/auth-api-service'


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
            this.props.onRegistrationSuccess()
        })
        .catch(res => {
            this.setState({ error: res.error })
        })

        
    }

    render() {
        const { error } = this.state
        return (
            <form 
                className='RegistrationForm'
                onSubmit={this.handleFormSubmission}
            >
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>

                <div className='full_name'>
                    <label htmlFor='RegistrationForm_full_name'>
                        Full Name
                    </label>

                    <input
                        name='full_name'
                        type='text'
                        required
                        id='RegistrationForm_full_name'>
                    </input>
                </div>

                <div className='user_name'>
                    <label htmlFor='RegistrationForm_user_name'>
                        Username
                    </label>

                    <input 
                        name='user_name'
                        type='text'
                        required
                        id='RegistrationForm_user_name'>
                    </input>
                </div>

                <div className='password'>
                    <label htmlFor='RegistrationForm_password'>
                        Password
                    </label>

                    <input
                        name='password'
                        type='password'
                        required
                        id='RegistrationForm_password'/>
                    
                </div>

                <div className='nick_name'>
                    <label htmlFor='RegistrationForm_nick_name'>
                        Nickname
                    </label>

                    <input 
                        name='nickname'
                        type='text'
                        required
                        id='RegistrationForm_nick_name'>
                    </input>
                </div>
                <button type='submit'>
                    Register
                </button>
            </form>
        )
    }
}