({
    updateTotal : function(component,selfId,targetId,converter,totalId) {
        var tVal = component.find(selfId).get('v.value');
        if(isNaN(tVal))
            component.find(selfId).set('v.value',0);
        else
			component.find(targetId).set('v.value',tVal*converter);
        if(totalId == 't-1')
        	this.setTotal_1(component);
        else if(totalId == 't-2')
            this.setTotal_2(component);
    },
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
	setTotal_2 : function(component) 
    {
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
        pennies2 = isNaN(pennies2) ? 0 : pennies2;
        nickels2 = isNaN(nickels2) ? 0 : nickels2;
        dimes2 = isNaN(dimes2) ? 0 : dimes2;
        quarters2 = isNaN(quarters2) ? 0 : quarters2;
        ones2 = isNaN(ones2) ? 0 : ones2;
        fives2 = isNaN(fives2) ? 0 : fives2;
        tens2 = isNaN(tens2) ? 0 : tens2;
        twenties2 = isNaN(twenties2) ? 0 : twenties2;
        fifties2 = isNaN(fifties2) ? 0 : fifties2;
        hundreds2 = isNaN(hundreds2) ? 0 : hundreds2;
        var total = pennies2+nickels2+dimes2+quarters2+ones2+fives2+tens2+twenties2+fifties2+hundreds2;
        component.find('t-2').set('v.value',total);
	}
})