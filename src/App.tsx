import React from 'react'
import { Kovan, DAppProvider } from "@usedapp/core"
import { Header } from './components/Header'
import { Container } from "@material-ui/core"
import { Main } from './components/Main'

const config = {
  networks: [Kovan],
  notifications: {
    expirationPeriod: 1000,
    checkInterval: 1000
  },
  autoConnect: false
}

function App() {
  return (
    <DAppProvider config={config}>
      <Header />
      <Container>
        <Main />
      </Container>
    </DAppProvider>
  )
}

export default App

// 14:27:00.895 [main] INFO  [main] com.usedapp.core.dappprovider.DAppProvider - Starting DAppProvider
