import React from 'react';
import { Route } from 'react-router-dom'
import LoginPage from '../LoginForm/LoginForm'
import RegistrationPage from '../RegistrationForm/RegistrationForm'
import HomePage from '../HomePage/HomePage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import ProfilePage from '../ProfilePage/ProfilePage'


class App extends React.Component {
  state = {
    hasError: true,
    userName: 'Dunder',
    password: 'Password'
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  componentDidMount(){
    //put fetch statement to get the username from the api here
  }

  renderMain() {

    return(
    <div className='main'>
      <Route exact path={'/'} component={HomePage}/>
      <Route path={'/login'} component={LoginPage}/>
      <Route path={'/register'} component={RegistrationPage}/>
      <Route path={'/PageNotFound'} component={NotFoundPage}/>
      <Route path={'/user/:userName'} component={ProfilePage}/>
    </div>
    )}
 

  render() {
    return (
      <div className='App'>
        <main className='App-Main'>
          {this.renderMain()}
        </main>
      </div>
    )
  }
}

export default App;