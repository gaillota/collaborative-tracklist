import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px 0;
`

const Vinyl = styled.div`
    height: 300px;
    width: 300px;
    background-size: cover;
    margin-bottom: 50px;
`

const H1 = styled.h1`
    color: #343434;
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
`

const H2 = styled.h2`
    color: #989898;
    font-size: 25px;
    text-align: center;
`

const P = styled.p`
    text-align: center;
    color: #989898;
    font-size: 25px;
`

const EmptyTrackList = () => (
    <Container>
        <Vinyl style={{ backgroundImage: `url('/images/vinyl-icon.png')` }}/>
        <H1>
            Tracklist
        </H1>
        <H2>
            La tracklist est vide
        </H2>
        <P>
            Ajoutez des titres depuis la recherche.
        </P>
    </Container>
)

export default EmptyTrackList
