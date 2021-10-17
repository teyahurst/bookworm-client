import React, { Component } from 'react'
import ApiContext from '../../ApiContext'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'

export default class RegistrationPage extends Component {
   static contextType = ApiContext

    handleRegistrationSuccess() {
    }

    render() {
        return (
            <div className='Registration-Page'>
                <h2>Register</h2>
                <RegistrationForm
                    onRegistrationSuccess={this.handleRegistrationSuccess}
                />
            </div>
        )
    }
}