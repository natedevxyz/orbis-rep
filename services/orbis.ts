import { Orbis } from '@orbisclub/orbis-sdk';

let orbis = new Orbis();

class OrbisService {
	constructor() {}

	async connect() {
		const res = await orbis.connect_v2({
			provider: window.ethereum,
			lit: false,
		});

		if (res.status == 200) {
			return res.did;
		} else {
			return '';
		}
	}
}

const orbisService = new OrbisService();
export default orbisService;
