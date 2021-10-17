require('dotenv').config()

const config = {
    REACT_APP_BASE_URL: process.env.REACT_APP_BASE_URL,
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    TOKEN_KEY: 'bookworm-client-auth-token',
    
}

export default config;