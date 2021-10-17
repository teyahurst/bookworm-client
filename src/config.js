require('dotenv').config()

const config = {
    API_ENDPOINT: process.env.API_ENDPOINT,
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    TOKEN_KEY: 'bookworm-client-auth-token',
    
}

export default config;