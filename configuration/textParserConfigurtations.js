'use strict';
let textParserConfigurations = {
	plansAndPricing: function () {
	  return this.map('.product', function ($product) {
	  	let englishToBool = {
			"Yes": true,
			"No": false
		}

	    return {
	    	monitors: 							   $product.find('h2').text(),
	    	chek_rate: 							   $product.find('dd:nth-child(2)').text().split(' ')[1],
			history: 							   $product.find('dd:nth-child(4)').text().split(' ')[0],
			multiple_notifications: englishToBool[ $product.find('dd:nth-child(6) span').text() ],
			push_notification: 		englishToBool[ $product.find('dd:nth-child(8) span').text() ],
			price:  							   $product.find('p:not(.billing_options) a').text().split(' ')[0].substr(1),
	    }
	  });
	}
}

module.exports = textParserConfigurations;