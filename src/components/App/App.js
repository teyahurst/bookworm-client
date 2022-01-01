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
import ApiContext from '../../ApiContext';


class App extends React.Component {
  state = {
    user_name: '',
    isLoggedIn: false,
    userBooks: []
  }



  setUserName = user_name => {
    this.setState({
      user_name
    })
  }

  setLoginStatus = isLoggedIn => {
    this.setState({
      isLoggedIn
    })
  }

  setUserBooks = books => {
    this.setState({
      userBooks: books
    })
  }

  render() {

      const value = {
        setUserName: this.setUserName,
        user_name: this.state.user_name,
        setLoginStatus: this.setLoginStatus,
        isLoggedIn: this.state.isLoggedIn,
        userBooks: this.state.userBooks,
        setUserBooks: this.setUserBooks
      }

    return (
      <ApiContext.Provider value={value}> 
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
                path={`/${this.state.user_name}/books`}
                component={ProfilePage}/>
                    
              <Route 
                component={NotFoundPage}
                />
            </Switch>
          </main>
        </div>
      </ApiContext.Provider>
    )
  }
}

export default App;