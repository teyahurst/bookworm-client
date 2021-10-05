import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginPage from '../LoginForm/LoginForm'
import RegistrationPage from '../RegistrationForm/RegistrationForm'
import HomePage from '../HomePage/HomePage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';


class App extends React.Component {
  state = {
    hasError: true,
    bookList: []
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }


 

  render() {
    return (
      <div className='App'>
        <main className='App-Main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route 
              path={'/'}
              component={HomePage}/>

            <Route
              path={'/register'}
              component={RegistrationPage}
              />

            <Route 
              path={'/login'}
              component={LoginPage}/>

            <Route 
              component={NotFoundPage}/>

            
            
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;