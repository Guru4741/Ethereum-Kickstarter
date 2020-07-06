import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), "0xf1F4819cD0f5c539380fa65f0B4B8075F8824d36");

export default instance;