// create your App component here
import React, { Component } from 'react'

const apiURL = "http://api.open-notify.org/astros.json"

class App extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    componentDidMount() {
        fetch(apiURL)
            .then(response => response.json())
            .then(result => this.setState(result))
            .catch(error => console.error(error)) 
    }

    render() {
        return (
            <React.Fragment>
                <h1>Hello</h1>
            </React.Fragment>
        )
    }
}

export default App

