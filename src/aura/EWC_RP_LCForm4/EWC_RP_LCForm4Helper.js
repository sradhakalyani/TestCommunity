({
    updateTotal : function(component,selfId,targetId,converter,totalId) {
        var tVal = component.find(selfId).get('v.value');
        if(isNaN(tVal))
            component.find(selfId).set('v.value',0);
        else
			component.find(targetId).set('v.value',tVal*converter);
        if(totalId == 't-1')
        	this.setTotal_1(component);

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
	}
})