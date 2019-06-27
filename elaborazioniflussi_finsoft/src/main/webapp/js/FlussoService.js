import AbstractService from  './AbstractService.js';
export default class FlussoService extends AbstractService {
	constructor(){
		super();
		this.url = this.baseUrl + '/flussi'
	}
	
	 async all() {
		 	console.log(this.url);
	        const tabella = await fetch(this.url, {
	            method: 'get',
	            headers: {
	                'Accept': 'application/json'
	            }
	        })
	                .then(response => response.json())
	                .catch(res => console.error(res))
	        return tabella;
	    }
	 
	 async find(url) {
		 const tabella = await fetch(url, {
			 method: 'get',
			 headers: {
				 'Accept': 'application/json'
			 }
		 })
		 .then(response => response.json())
		 .catch (res => console.error(res))
	return tabella;	 
	 }
	 
	  create (json){
		  fetch(this.url, {
			 method:'post',
			 headers: {
				 'Accept': 'application/json',
				 'Content-Type': 'application/json'
			 },
			 body: JSON.stringify(json)
			 
		 }).then(response => console.log(response.status));
			
	 }
	  update (url,json){
		  fetch(url, {
			 method: 'put',
			 headers: {
				 'Accept': 'application/json',
					 'Content-Type': 'application/json'
			 },
			 body: JSON.stringify(json)
			 
		 }).then(response => console.log(response.status));
	 }
	  delete(url){
		  fetch(url,{
			 method: 'delete',
			 headers: {
				 'Accept': 'application/json'
			 }
		 })
		 .then(response => {
			 console.log(response.status);
		 })
		 .catch(res => console.error(res))
	 }
	}