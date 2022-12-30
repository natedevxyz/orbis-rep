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
			description: 'Badge of decentralized verification score',
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

		const passport = new Krebit.core.Passport({
			...information,
			litSdk: LitJsSdk,
		} as any);
		await passport.connect(currentSession);

		const issuer = new Krebit.core.Krebit({
			...information,
			litSdk: LitJsSdk,
		} as any);
		await issuer.connect(currentSession);

		const claim = await this.getClaim(toAddress, score);
		const issuedCredential = await issuer.issue(claim);
		await issuer.checkCredential(issuedCredential);
		const credentialId = await passport.addIssued(issuedCredential);

		const credential = await passport.getCredential(credentialId);
		const addCredential = await passport.addCredential(credential);

		return true;
	};
}

const krebitService = new KrebitService();
export default krebitService;
