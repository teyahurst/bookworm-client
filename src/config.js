require('dotenv').config()

const config = {
    API_ENDPOINT: 'http://localhost:8000',
    REACT_APP_API_KEY: process.env.REACT_APP_API_KEY,
    TOKEN_KEY: process.env.TOKEN_KEY,
    
}

export default config;