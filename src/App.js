//import logo from './logo.svg';
import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  
  useEffect(() => {
    const getMyNfts = async () => {
      const openSeaData = await axios.get(
        'https://testnets-api.opensea.io/assets?asset_contract_address=0x3377063613cA1caC67BfcA231Ea046cD9A08E3aa&order_direction=asc'
      )
      console.log(openSeaData.data.assets)
      setPunkListData(openSeaData.data.assets)
    }

    return getMyNfts()
  }, [])


  return (
    <div className='app'>
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={ punkListData } selectedPunk={ selectedPunk }/>
            <PunkList 
              punkListData={punkListData} 
              setSelectedPunk={setSelectedPunk} 
            />
          </>
        )
      }
    </div>
  )
}

export default App;
