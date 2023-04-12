import { CongratsText, DataText, ErrorText, GetNftButton, MainPage, SpinnigVscLogo} from './Components'
import { useEffect, useState } from 'react';
import { Contract, ethers } from "ethers";
import CONTRACT_ABI from '../abi.json';

declare global {
  interface Window{
    ethereum?: any
  }
}

function App() {
  const CONTRACT_ADDRESS = "0xd8B1DE48f6aeA25B5BC73600A805985b4051e7a4";
  const [error, setError] = useState('');
  const [tokenId, setTokenId] = useState(0);
  const [hasNFT, setHasNFT] = useState(false);
  const [contract, setContract] = useState<Contract>();
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleOnClickGetNFT = async () => {
    try {
      if (contract === undefined) {
        throw Error("Contract not defined");
      }
      await contract.mint();
      const newTokenId = await contract.getNextId()
      setTokenId(newTokenId);
      setHasNFT(true);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  }

  const handleOnClickConnect = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum, "sepolia")
      const signer = await provider.getSigner();
      const address = signer.getAddress();
      const contract_temp = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      const walletBalance = await contract_temp.balanceOf(address);

      if (walletBalance != 0) {
        const tokenIdNew = await contract_temp.getTokenIdByOwnerAddress()
        setTokenId(tokenIdNew);
      }
    
      setHasNFT(walletBalance != 0);
      setContract(contract_temp);
      setIsConnected(true);
      setIsLoading(false);
    } catch (err: unknown) {
      setError((err as Error).message);
    }
  }

  useEffect(() => {
    if (!window.ethereum) {
      return setError(`Baixe a extensão do MetaMask para pegar sua NFT!`);
    } else if(window.ethereum!._state!.accounts!.length > 0){
      handleOnClickConnect()
    } else {
      setIsLoading(false);
    }
    new Audio('./hino.mp3').play()
  }, [])

  return (
    <MainPage className="App">
      {((!isConnected && !isLoading) || (isConnected && !isLoading && !hasNFT)) && <CongratsText>Parabéns! Você acaba de encontrar a NFT do Vasconha!</CongratsText>}
      {(isConnected && !isLoading && hasNFT) &&  <CongratsText>Você já faz parte da tropa do Vasconha!</CongratsText>}
      {(!isLoading && hasNFT) && <DataText>Contrato: {CONTRACT_ADDRESS} | Id: {tokenId.toString()}</DataText>}
      <SpinnigVscLogo src="./logo_vasco.png" />
      {(!hasNFT && isConnected && !isLoading) && <GetNftButton disabled={hasNFT} onClick={handleOnClickGetNFT}>Pegar meu NFT</GetNftButton>}
      {(!isConnected && !isLoading) && <GetNftButton disabled={isConnected} onClick={handleOnClickConnect}>Conectar Carteira</GetNftButton>}
      <ErrorText>{error}</ErrorText>
    </MainPage>
  )
}

export default App