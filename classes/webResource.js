'use strict';
let request = require('request');

class WebResource {
  constructor({url=''}) {
    this.url = url;
  }

  fetch(){
  	return new Promise((resolve,reject)=> {
  		let req = request(this.url,
  			(error, response, body) => {
  				if (error){
  					reject(error);
  				}
				this.body = body;
				resolve(this);
  			});
  	});
  }

  getBody(){
  	return this.body;
  }
}

module.exports = WebResource;