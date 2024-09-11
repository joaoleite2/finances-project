import bitcoin from '../../../assets/coins/bitcoin.png';
import cardano from '../../../assets/coins/cardano.png';
import dogecoin from '../../../assets/coins/dogecoin.png';
import ethereum from '../../../assets/coins/ethereum.png';
import solana from '../../../assets/coins/solana.png';

interface CoinsType {
  icon:string;
  text:string;
  color:string;
}

export const coins:CoinsType[] = [
  {
    icon:bitcoin,
    color:'#F7931A',
    text:'Bitcoin',
  },
  {
    icon:cardano,
    color:'#1F6DD4',
    text:'Cardano'
  },
  {
    icon:dogecoin,
    color:'#BCA131',
    text:'Dogecoin'
  },
  {
    icon:ethereum,
    color:'#9098B6',
    text:'Ethereum'
  },
  {
    icon:solana,
    color:'#2AD5BD',
    text:'Solana'
  },
]