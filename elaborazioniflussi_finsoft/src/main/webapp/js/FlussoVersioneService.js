import AbstractService from './AbstractService.js';
export default class VersioneService extends AbstractService {
	constructor(){
		super();
		this.url = this.baseUrl + '/versioni'
	}
	
	async all (){
		console.log(this.url);
		const versione = await fetch (this.url,{
			method: 'get',
			headers : {
				'Accept': 'application/json'
			}
		})
			.then (response =>response.json())
			.catch (res => console.error(res))
		return versione;
	}
	
	async find (url){
		const versione = await fetch (url,{
			method: 'get',
			headers : {
				'Accept': 'application/json'
			}
		})
			.then (response => response.json())
			.catch ( res => console.error (res))
		return versione;
	}
	
	create (json){
		fetch (this.url, {
			method: 'post',
			headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify(json)
		}).then (response =>console.log (response.status)); 
			
	}
	
	update (url, json){
		fetch (url, {
			method: 'put',
			headers: {
				'Accept' : 'application/json',
				'Content-Type' : 'application/json'
			},
			body: JSON.stringify (json)
		}).then (response => console.log (response.status));
	}
	
	delete (json){
		fetch (url, {
			method: 'delete',
			headers: {
				'Accept': 'application/json'
			}
		})
		.then (response => {
			console.log(response.status);
		})
		.catch( res => console.error(res))
	}
}