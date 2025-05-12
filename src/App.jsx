import React from 'react'
import './App.css'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletConnectButton, WalletDisconnectButton, WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'

import '@solana/wallet-adapter-react-ui/styles.css'
import Airdrop from './Airdrop'

function App() {

  return (
    <ConnectionProvider endpoint='https://solana-devnet.g.alchemy.com/v2/Brc7IFuTf0Zs8WpMrqqg9CQnZxbfeqTl'>
      <WalletProvider wallets={[]} autoConnect>
        <WalletModalProvider>
          <WalletMultiButton />
          <WalletDisconnectButton />
          <Airdrop />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
