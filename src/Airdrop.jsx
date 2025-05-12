import { useWallet } from '@solana/wallet-adapter-react';
import React from 'react';

const Airdrop = () => {
    const wallet = useWallet()
    return <div>
        {wallet.publicKey && `Hey Mr ${wallet.publicKey.toString()}`}
       <input type="text" placeholder='Amout' />
       <button>Send Airdrop</button>
    </div>
}

export default Airdrop