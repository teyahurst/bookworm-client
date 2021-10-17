import config from '../config'
import TokenService from './token-service'

const AuthApiService = {
    postLogin(credentials) {
        return fetch(`${config.REACT_APP_BASE_URL}/api/auth/login`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(credentials),
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(event => Promise.reject(event))
                : res.json()
        )
    },
    postUser(user) {
        return fetch(`${config.REACT_APP_BASE_URL}/api/users`, {
            method: 'POST',
            headers: {
                'authorization': `bearer ${TokenService.getAuthToken()}`,
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(event => Promise.reject(event))
            : res.json()
            )
    },
}

export default AuthApiService