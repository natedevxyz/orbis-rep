import { Orbis } from '@orbisclub/orbis-sdk';

let orbis = new Orbis();

class OrbisService {
	constructor() {}

	async connect() {
		const res = await orbis.connect_v2({
			provider: window.ethereum,
			lit: true,
		});

		if (res.status == 200) {
			return res.did;
		} else {
			return '';
		}
	}

	async logout() {
		const res = await orbis.logout();
		const defaultUser = '';
		const defaultScore = 0;

		return { defaultUser, defaultScore };
	}
}

const orbisService = new OrbisService();
export default orbisService;
