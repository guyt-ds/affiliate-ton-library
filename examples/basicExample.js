import { trackUserAction } from 'affiliate-ton-library';

const contractAddress = 'your_campaign_contract_address';  // Each Campaign is a smart contract on TON.  Extract address from your campaign page. 
const userActionOpCode = 2001; // op code for this operation (defined in your Campaign as a customized event.  Each such event has a unique OP Code, e.g. 2001 for user registration)
const affiliateId = 12; // extract from URL or cookies (depending on your affiliate link construct)

document.getElementById('registerButton').addEventListener('click', async () => {
    await trackUserAction(contractAddress, userActionOpCode, affiliateId);
});
