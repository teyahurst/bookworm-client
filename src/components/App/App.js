import React from 'react';
import { Route, Switch } from 'react-router-dom'
import LoginForm from '../LoginForm/LoginForm'
import RegistrationForm from '../RegistrationForm/RegistrationForm'
import HomePage from '../HomePage/HomePage'


class App extends React.Component {
  state = {
    hasError: true,
    bookList: []
  }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }


  componentDidMount() {
    
  }

  render() {
    return (
      <div className='App'>
        <main className='App-Main'>
          {this.state.hasError && <p className='red'>There was an error! Oh no!</p>}
          <Switch>
            <Route
              path={'/register'}
              component={RegistrationForm}
              />

            <Route 
              path={'/login'}
              component={LoginForm}/>

            <Route 
              path={'/'}
              component={HomePage}/>
            
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;