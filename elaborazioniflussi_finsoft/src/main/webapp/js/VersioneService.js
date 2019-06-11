import AbstractService from `./js/AbstractService.js`;
export default class VersioneService extends AbstractService {
	constructor(){
		super();
		this.url = this.baseUrl + `/versioni`
	}
	
	async all (start, page){
		const data = await fetch (this.url + `?start=${start}&page=${page}`,{
			method: `get`,
			headers : {
				`Accept`: `application/json`
			}
		})
		.then (response =>response.json())
		.catch (res => console.error(res))
		return data;
	}
	
	async find (url){
		const data = await fetch (this.url,{
			method: `get`,
			headers : {
				`Accept`: `application/json`
			}
		})
		.then (response => response.json())
		.catch ( res => console.error (res))
		return data;
	}
	
	create json {
		fetch (this.url, {
			method: `post`,
			headers: {
				`Accept` : `application/json`
					`Content-Type` : `application/json`
			},
			body: JSON.stringify(json)
		}).then (response =>console.log (response.status)); 
			
	}
	
	update (url, json){
		fetch (url, {
			method: `put`,
			headers: {
				`Accept` : `application/json`
					`Content-Type` : `application/json`
			},
			body: JSON.stringify (json)
		}).then (response => console.log (response.status));
	}
	
	delete (json){
		fetch (url, {
			method: `delete`,
			headers: {
				`Accept`: `application/json`
			}
		})
		.then (response => {
			console.log(response.status);
		})
		.catch( res => console.error(res))
	}
}