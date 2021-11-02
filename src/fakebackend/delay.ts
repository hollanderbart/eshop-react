import { config } from '../services/config';

const delay = (timeout = config.delay) => new Promise(resolve => setTimeout(resolve, timeout));

export default delay;
