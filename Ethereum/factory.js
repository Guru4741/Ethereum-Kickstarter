import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(JSON.parse(CampaignFactory.interface), "0x84E17Cd0a267a08ff583F77384eC2C2Ee34960E8");

export default instance;