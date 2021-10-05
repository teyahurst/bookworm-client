import React from 'react'
import reactDom from 'react-dom'

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import SearchResults from '../components/Search/SearchResults'

it('renders without crashing', () => {
    const div = document.createElement('div')

    ReactDOM.render(<BrowserRouter><SearchResults bookResults={[]}/></BrowserRouter>, div)

    ReactDOM.unmountComponentAtNode(div)
})