import AbstractService from './js/AbstractService.js';
export default class ElaborazioneService extends AbstractService {
	constructor () {
		super();
		this.url = this.baseUrl + "/elaborazioni"
	}
	
	async all() {
		console.log(this.url);
		const data = await fetch (this.url,{
			method: 'get',
			headers : {
				'Accept': 'application/json'
			}
			
		})
		.then (response => response.json())
		.catch(res => console.error(res))
		return data;
	}
}