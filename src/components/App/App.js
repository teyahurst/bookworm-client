import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from '../Header/Header'
import LoginPage from '../LoginForm/LoginForm'
import RegistrationPage from '../RegistrationForm/RegistrationForm'
import HomePage from '../HomePage/HomePage'
import NotFoundPage from '../../routes/NotFoundPage/NotFoundPage';
import ProfilePage from '../ProfilePage/ProfilePage'
import PrivateRoute from '../../Utils/PrivateRoute';
import PublicOnlyRoute from '../../Utils/PublicOnlyRoute';


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

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <Header/>
        </header>
        <main className='App-main'>
          <Switch>
            <Route 
              exact
              path={'/'}
              component={HomePage}
              />

              <PublicOnlyRoute
                path={'/login'}
                component={LoginPage}
                />

              <PublicOnlyRoute
                path={'/register'}
                component={RegistrationPage}
                />

              <PrivateRoute 
                path={'/:user_name'}
                component={ProfilePage}
                />
                <Route 
                  component={NotFoundPage}
                  />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App;