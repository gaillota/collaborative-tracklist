import React from 'react'

import Container from './components/Container'
import Header from './components/Header'
import H1 from './components/H1'

class App extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <H1>Collaborative Tracklist</H1>
                </Header>
            </Container>
        )
    }
}

export default App
