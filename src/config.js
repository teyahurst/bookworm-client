require('dotenv').config()

const config = {
    API_ENDPOINT: 'https://sleepy-reef-12097.herokuapp.com',
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    TOKEN_KEY: 'bookworm-client-auth-token',
    
}

export default config;