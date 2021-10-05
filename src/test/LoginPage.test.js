import React from 'react'
import reactDom from 'react-dom'

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import LoginPage from '../routes/LoginPage/LoginPage'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<BrowserRouter><LoginPage/></BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})