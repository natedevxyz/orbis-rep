import type { NextApiRequest, NextApiResponse } from 'next';
import { ethers } from 'ethers';
import Krebit from '@krebitdao/reputation-passport';
import LitJsSdk from '@lit-protocol/sdk-nodejs';

const connect = async (claim: any) => {
	const ethProvider = Krebit.lib.ethereum.getProvider();
	let wallet: ethers.Wallet;
	const unlockedWallet = ethers.Wallet.fromMnemonic(
		process.env.SERVER_ETHEREUM_SEED!
	);
	wallet = unlockedWallet.connect(ethProvider);

	if (wallet.address) {
		ethProvider.setWallet(wallet);

		const Passport = new Krebit.core.Passport({
			wallet,
			ethProvider,
			address: wallet.address,
			ceramicUrl: 'https://ceramic-clay.3boxlabs.com',
			litSdk: LitJsSdk,
		} as any);
		await Passport.connect();

		const Issuer = new Krebit.core.Krebit({
			wallet,
			ethProvider,
			address: wallet.address,
			ceramicUrl: 'https://ceramic-clay.3boxlabs.com',
			litSdk: LitJsSdk,
		});
		await Issuer.connect();

		const issuedCredential = await Issuer.issue(claim);
		Issuer.checkCredential(issuedCredential);
		const credentialId = await Passport.addIssued(issuedCredential);

		return credentialId;
	}
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<any>
) {
	if (req.method === 'POST') {
		if (req.body) {
			const claim = req.body;
			const credential = await connect(claim);
			res.status(200).json({ credential });
		}
	} else {
		res.status(400).send('Method not allowed');
	}
}
