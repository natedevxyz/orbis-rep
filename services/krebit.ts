import { getWalletInformation } from '../utils/wallet';
import Krebit from '@krebitdao/reputation-passport';
import LitJsSdk from '@lit-protocol/sdk-browser';

class KrebitService {
	constructor() {}

	async getClaim(toAddress: string, score: number) {
		const badgeValue = {
			entity: 'OrbisRep',
			name: 'Orbis Reputation Index',
			imageUrl: 'none',
			description: 'Badge for tracking decentralized verification',
			skills: [{ skillId: 'verification', score: score }],
			xp: 10,
		};

		const expirationDate = new Date();
		const expiresYears = 3;
		expirationDate.setFullYear(expirationDate.getFullYear() + expiresYears);

		return {
			id: 'orbis-rep-badge',
			ethereumAddress: toAddress,
			did: `did:pkh:eip155:1:${toAddress}`,
			type: 'Badge',
			value: badgeValue,
			tags: ['Community'],
			typeSchema: 'krebit://schemas/badge',
			expirationDate: new Date(expirationDate).toISOString(),
		};
	}

	issueCredential = async (toAddress: string, score: number) => {
		const information = await getWalletInformation();
		const session = window.localStorage.getItem('did-session');
		const currentSession = JSON.parse(session!);

		const Passport = new Krebit.core.Passport({
			...information,
			litSdk: LitJsSdk,
		} as any);
		await Passport.connect(currentSession);

		const claim = await this.getClaim(toAddress, score);

		const requestIssue = await fetch('/api/issuer', {
			method: 'POST',
			body: JSON.stringify(claim),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const responseIssue = await requestIssue.json();

		const credentialId = responseIssue.credential;
		console.log(credentialId);
		const credential = await Passport.getCredential(credentialId);
		console.log(credential);
		const addCredential = await Passport.addCredential(credential);

		return true;
	};
}

const krebitService = new KrebitService();
export default krebitService;
