import { mnemonicToWalletKey } from 'ton-crypto';
import { TonClient } from 'ton';
import dotenv from 'dotenv';

dotenv.config();

export async function trackUserAction(contractAddress, userActionOpCode, affiliateId) {
    const client = new TonClient({ endpoint: 'https://toncenter.com/api/v2/jsonRPC' });

    // Load mnemonics from environment
    const mnemonics = process.env.MNEMONICS;

    if (!mnemonics) {
        throw new Error('Mnemonics are missing from the .env file');
    }

    // Convert mnemonics to wallet key
    const walletKey = await mnemonicToWalletKey(mnemonics.split(' '));
    const wallet = client.openWallet(walletKey);

    // Construct the transaction payload for the user action
    const transactionPayload = {
        $$type: 'AdvertiserUserAction',
        affiliateId: BigInt(affiliateId),
        userActionOpCode: BigInt(userActionOpCode),
        isPremiumUser: false,
    };

    try {
        const result = await wallet.sendTransaction({
            to: contractAddress,
            value: 100000000, // Example value in nanoTONs
            body: transactionPayload,
        });

        if (result.success) {
            console.log('Transaction sent successfully:', result);
        } else {
            console.error('Transaction failed:', result);
        }
    } catch (error) {
        console.error('Error sending transaction:', error);
    }
}
