ROOT = __dirname+"\\";

const WebResource =require(ROOT+'classes\\webResource.js');
const TextParser =require(ROOT+'classes\\textParser.js');
let plansAndPricingConfiguration = require(ROOT+'configuration\\textParserConfigurtations.js').plansAndPricingConfiguration;

let monitorWebResource = new WebResource({url:'https://www.port-monitor.com/plans-and-pricing'});
let plansAndPricingParser = new TextParser({configuration:plansAndPricingConfiguration});

monitorWebResource.fetch()
.then((resource)=>{
	let monitorWebPlans = plansAndPricingParser.parse({mainString:resource.toString()});
	console.log(monitorWebPlans.products);
});