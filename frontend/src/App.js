import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../src/components/Header'

const App = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to ClimbLikeANoob</h1>
        </Container>
      </main>
    </>
  )
}

export default App
