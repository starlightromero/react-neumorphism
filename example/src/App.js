import React from 'react'
import {
  Input,
  Button,
  Decorator,
  Container
} from '@starlightromero/react-neumorphism'
import '@starlightromero/react-neumorphism/dist/index.css'

const App = () => {
  return (
    <div className='App'>
      <div className='light'>
        <div className='top'>
          <Decorator size='100' />
          <h1>React</h1>
        </div>
        <Container
          width='97%'
          height='500px'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Button className='Button' fontSize='24'>
            Sign In
          </Button>
          <Button className='Button' fontSize='48'>
            Sign Up
          </Button>
          <Input label='Username' width='300px' />
          <Container
            width='500px'
            height='60px'
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button active>Home</Button>
            <Button>Contacts</Button>
            <Button>Settings</Button>
          </Container>
        </Container>
      </div>

      <div className='dark'>
        <div className='top'>
          <h1>Neumorphism</h1>
          <Decorator mode='dark' size='100' />
        </div>
        <Container
          mode='dark'
          width='97%'
          height='500px'
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
            height: '100%'
          }}
        >
          <Button mode='dark' fontSize='24'>
            Sign In
          </Button>
          <Button mode='dark' fontSize='48'>
            Sign Up
          </Button>
          <Input mode='dark' label='Username' width='300px' />
          <Container
            mode='dark'
            width='500px'
            height='60px'
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Button mode='dark' active>
              Home
            </Button>
            <Button mode='dark'>Contacts</Button>
            <Button mode='dark'>Settings</Button>
          </Container>
        </Container>
      </div>
    </div>
  )
}

export default App
