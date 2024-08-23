import bitcoin from '../../../assets/coins/bitcoin.png';
import cardano from '../../../assets/coins/cardano.png';
import dogecoin from '../../../assets/coins/dogecoin.png';
import ethereum from '../../../assets/coins/ethereum.png';
import solana from '../../../assets/coins/solana.png';

interface CoinsType {
  icon:string;
  text:string;
}

export const coins:CoinsType[] = [
  {
    icon:bitcoin,
    text:'Bitcoin'
  },
  {
    icon:cardano,
    text:'Cardano'
  },
  {
    icon:dogecoin,
    text:'Dogecoin'
  },
  {
    icon:ethereum,
    text:'Ethereum'
  },
  {
    icon:solana,
    text:'Solana'
  },
]