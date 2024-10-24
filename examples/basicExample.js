import { trackUserAction } from 'affiliate-ton-library';

const contractAddress = 'your_campaign_contract_address';  // Each Campaign is a smart contract on TON.  Extract address from your Campaign page. 
const userActionOpCode = 2001; // Each user action has a unique op code.  Extract op code from your Campaign page (e.g. 2001 for user registration, 2002 for purchase, etc...)
const affiliateId = 12; // extract from URL or cookies (depending on your affiliate link construct).

document.getElementById('registerButton').addEventListener('click', async () => {
    await trackUserAction(contractAddress, userActionOpCode, affiliateId);
});
