'use strict';
let htmlToJson = require("html-to-json");

class TestParser {
  constructor({configuration = {}}) {
    this.configuration = configuration;
  }

  parse({mainString = ""}){
  	console.log(this.configuration);
	return htmlToJson.parse(mainString,this.configuration);
  }
}


module.exports = TestParser;