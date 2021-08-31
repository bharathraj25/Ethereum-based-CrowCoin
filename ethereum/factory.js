import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x40dde621d953C6B12d474cB86004eA56E12a15F8'
);

export default instance;
