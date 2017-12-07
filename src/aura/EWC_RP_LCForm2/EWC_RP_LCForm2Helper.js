({
	setTotal_1 : function(component) {
		var pennies = component.find('pennies-dollers-1').get('v.value');
        var nickels = component.find('nickels-dollers-1').get('v.value');
        var dimes = component.find('dimes-dollers-1').get('v.value');
        var quarters = component.find('quarters-dollers-1').get('v.value');
        var ones = component.find('ones-dollers-1').get('v.value');
        var fives = component.find('fives-dollers-1').get('v.value');
        var tens = component.find('tens-dollers-1').get('v.value');
        var twenties = component.find('twenties-dollers-1').get('v.value');
        var fifties = component.find('fifties-dollers-1').get('v.value');
        var hundreds = component.find('hundreds-dollers-1').get('v.value');
        var total = pennies+nickels+dimes+quarters+ones+fives+tens+twenties+fifties+hundreds;
        component.find('t-1').set('v.value',total);
	},
	setTotal_2 : function(component) {
        console.log("helper method 2")
		var pennies2 = component.find('pennies-dollers-2').get('v.value');
        var nickels2 = component.find('nickels-dollers-2').get('v.value');
        var dimes2 = component.find('dimes-dollers-2').get('v.value');
        var quarters2 = component.find('quarters-dollers-2').get('v.value');
        var ones2 = component.find('ones-dollers-2').get('v.value');
        var fives2 = component.find('fives-dollers-2').get('v.value');
        var tens2 = component.find('tens-dollers-2').get('v.value');
        var twenties2 = component.find('twenties-dollers-2').get('v.value');
        var fifties2 = component.find('fifties-dollers-2').get('v.value');
        var hundreds2 = component.find('hundreds-dollers-2').get('v.value');
        var total2 = pennies2+nickels2+dimes2+quarters2+ones2+fives2+tens2+twenties2+fifties2+hundreds2;
        component.find('t-2').set('v.value',total2);
	}
})