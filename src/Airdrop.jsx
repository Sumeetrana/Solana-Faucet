import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

const Airdrop = () => {
    const wallet = useWallet()
    const { connection } = useConnection()

    // Define the function inside the component body
    const sendAirdropToUser = async () => {
        const transactionSignature = await connection.requestAirdrop(wallet.publicKey, 1000000000)

        // await connection.confirmTransaction(transactionSignature, 'processed')

        const balance = await connection.getBalance(wallet.publicKey)
        alert(`Airdrop successful! New balance: ${(balance / 1e9).toFixed(2)} SOL`);

    }

    return <div>
        {wallet.publicKey && `Hey Mr ${wallet.publicKey.toString()}`}
        <br></br>
       <input type="text" placeholder='Amout' />
       <button onClick={sendAirdropToUser}>Send Airdrop</button>
    </div>
}

export default Airdrop