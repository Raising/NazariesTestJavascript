'use strict';
let ROOT = __dirname+"\\";

const WebResource =require(ROOT+'classes\\webResource.js');
const TextParser =require(ROOT+'classes\\textParser.js');
let textParserConfigs = require(ROOT+'configuration\\textParserConfigurtations.js');

let monitorWebResource = new WebResource({ url: 'https://www.port-monitor.com/plans-and-pricing' });
let plansAndPricingParser = new TextParser({ configuration: textParserConfigs.plansAndPricing });

monitorWebResource.fetch()
.then((resource)=>{
	return plansAndPricingParser.parse({mainString:resource.getBody()});
})
.then((monitorWebPlans) => {
	printPrettyJSON(monitorWebPlans);
}) 
.catch(console.error.bind(console));


function printPrettyJSON(object){
	console.log(JSON.stringify(object, null, 2));
}