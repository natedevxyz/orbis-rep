import { PassportReader } from '@gitcoinco/passport-sdk-reader';
import { PassportScorer } from '@gitcoinco/passport-sdk-scorer';

class PassportService {
	constructor() {}

	async getPassport(address: `0x${string}`) {
		const reader = new PassportReader(
			'https://ceramic.passport-iam.gitcoin.co',
			'1'
		);

		const passport = await reader.getPassport(address);

		const stampsArr = passport.stamps.map((x: any) => x.provider);

		return stampsArr;
	}

	async getScore(address: `0x${string}`) {
		const scorer = new PassportScorer([
			{
				provider: 'FirstEthTxnProvider',
				issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
				score: 0.25,
			},
			{
				provider: 'Ens',
				issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
				score: 0.25,
			},
			{
				provider: 'NFT',
				issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
				score: 0.25,
			},
			{
				provider: 'GitcoinContributorStatistics#numGrantsContributeToGte#1',
				issuer: 'did:key:z6MkghvGHLobLEdj1bgRLhS4LPGJAvbMA1tn2zcRyqmYU5LC',
				score: 0.25,
			},
		]);

		const score = await scorer.getScore(address);

		return score * 100;
	}
}

const passportService = new PassportService();
export default passportService;
