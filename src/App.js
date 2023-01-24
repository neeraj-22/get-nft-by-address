import React, { Fragment, useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Layout/Header';
import Footer from './Components/Layout/Footer';

import NFTContainer from './Components/NFTContainer';

function App() {

  const [walletAddress, setWalletAddress] = useState(null);
  const [nftData, setNftData] = useState([]);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

      setWalletAddress(accounts[0]);

    }
  }

  const getNFTData = async () => {

    const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`)

    // const response = await fetch(`https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:0x318f3BF55949B361708A30c410BD5bF7101EEEb3`)

    const data = await response.json();

    setNftData(data.items.slice(0, 15));

    console.log(data)
  }

  useEffect(() => {
    getNFTData();
    // eslint-disable-next-line
  }, [walletAddress])

  return (
    <Fragment>
      <Header/>
      <div className="App">
        <div>
          <h2>Account :
            <span>
              {walletAddress !== null
                ?
                walletAddress.slice(0, 3)+"..." + walletAddress.slice(39, 41)
                :
                ""
              }
            </span>
          </h2>
          <button onClick={connectWallet}>ConnectWallet</button>
        </div>
        <div>
          <NFTContainer nfts={nftData} />
        </div>
      </div>
      <div>
      </div>
      <Footer/>
    </Fragment>
  );
}

export default App;
