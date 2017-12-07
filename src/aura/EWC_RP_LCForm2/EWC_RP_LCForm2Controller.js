({
	 clickSubmit: function(component, event, helper) {
        
       var allValid = component.find('fieldID').reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && !inputCmp.get('v.validity').valueMissing;
        }, true);
        if(allValid)
        {
            //invoke apex controller
			// alert('All form entries look valid. Ready to submit!');
            component.set('v.isVisible','0');
			var toastEvent = $A.get("e.force:showToast"); 
			toastEvent.setParams({ 
				'title' : 'SUCCESS!', 
				'message' : 'Your ticket is submitted Successfully!' 
			}); 
			toastEvent.fire();  
		 // Close the action panel
        var dismissActionPanel = $A.get("e.force:closeQuickAction");
        dismissActionPanel.fire();

        }
         else {
            alert('Please update the invalid form entries and try again.');
        }
	},

	redirect: function(component, event, helper) {
                var url = window.location.href; 
                var value = url.substr(0,url.lastIndexOf('/') + 1);
                value= value+'ewc-dailyops-registerprocedures';
                console.log(value);
                window.open(value, '_self');
               return false;

	},
	penniesToDollers_1 : function(component, event, helper) {
		var pennies = parseInt(component.find('pennies-1').get('v.value'));
        component.find('pennies-dollers-1').set('v.value',pennies*0.01);
        helper.setTotal_1(component);
	},
    nickelsToDollers_1 : function(component, event, helper) {
		var nickels = parseInt(component.find('nickels-1').get('v.value'));
        component.find('nickels-dollers-1').set('v.value',nickels*0.05);
        helper.setTotal_1(component);
	},
    dimesToDollers_1 : function(component, event, helper) {
		var dimes = parseInt(component.find('dimes-1').get('v.value'));
        component.find('dimes-dollers-1').set('v.value',dimes*0.1);
        helper.setTotal_1(component);
	},
    quartersToDollers_1 : function(component, event, helper) {
		var quarters = parseInt(component.find('quarters-1').get('v.value'));
        component.find('quarters-dollers-1').set('v.value',quarters*0.25);
        helper.setTotal_1(component);
	},
    onesToDollers_1 : function(component, event, helper) {
		var ones = parseInt(component.find('ones-1').get('v.value'));
        component.find('ones-dollers-1').set('v.value',ones*1);
        helper.setTotal_1(component);
	},
    fivesToDollers_1 : function(component, event, helper) {
		var fives = parseInt(component.find('fives-1').get('v.value'));
        component.find('fives-dollers-1').set('v.value',fives*5);
        helper.setTotal_1(component);
	},
    tensToDollers_1 : function(component, event, helper) {
		var tens = parseInt(component.find('tens-1').get('v.value'));
        component.find('tens-dollers-1').set('v.value',tens*10);
        helper.setTotal_1(component);
	},
    twentiesToDollers_1 : function(component, event, helper) {
		var twenties = parseInt(component.find('twenties-1').get('v.value'));
        component.find('twenties-dollers-1').set('v.value',twenties*20);
        helper.setTotal_1(component);
	},
    fiftiesToDollers_1 : function(component, event, helper) {
		var fifties = parseInt(component.find('fifties-1').get('v.value'));
        component.find('fifties-dollers-1').set('v.value',fifties*50);
        helper.setTotal_1(component);
	},
    hundredsToDollers_1 : function(component, event, helper) {
		var hundreds = parseInt(component.find('hundreds-1').get('v.value'));
        component.find('hundreds-dollers-1').set('v.value',hundreds*100);
        helper.setTotal_1(component);
	},
	penniesToDollers_2 : function(component, event, helper) {
		var pennies2 = parseInt(component.find('pennies-2').get('v.value'));
        component.find('pennies-dollers-2').set('v.value',pennies2*0.01);
        helper.setTotal_2(component);
	},
    nickelsToDollers_2 : function(component, event, helper) {
		var nickels2 = parseInt(component.find('nickels-2').get('v.value'));
        component.find('nickels-dollers-2').set('v.value',nickels2*0.05);
        helper.setTotal_2(component);
	},
    dimesToDollers_2 : function(component, event, helper) {
		var dimes2 = parseInt(component.find('dimes-2').get('v.value'));
        component.find('dimes-dollers-2').set('v.value',dimes2*0.1);
        helper.setTotal_2(component);
	},
    quartersToDollers_2 : function(component, event, helper) {
		var quarters2 = parseInt(component.find('quarters-2').get('v.value'));
        component.find('quarters-dollers-2').set('v.value',quarters2*0.25);
        helper.setTotal_2(component);
	},
    onesToDollers_2 : function(component, event, helper) {
		var ones2 = parseInt(component.find('ones-2').get('v.value'));
        component.find('ones-dollers-2').set('v.value',ones2*1);
        helper.setTotal_2(component);
	},
    fivesToDollers_2 : function(component, event, helper) {
		var fives2 = parseInt(component.find('fives-2').get('v.value'));
        component.find('fives-dollers-2').set('v.value',fives2*5);
        helper.setTotal_2(component);
	},
    tensToDollers_2 : function(component, event, helper) {
		var tens2 = parseInt(component.find('tens-2').get('v.value'));
        component.find('tens-dollers-2').set('v.value',tens2*10);
        helper.setTotal_2(component);
	},
    twentiesToDollers_2 : function(component, event, helper) {
		var twenties2 = parseInt(component.find('twenties-2').get('v.value'));
        component.find('twenties-dollers-2').set('v.value',twenties2*20);
        helper.setTotal_2(component);
	},
    fiftiesToDollers_2 : function(component, event, helper) {
		var fifties2 = parseInt(component.find('fifties-2').get('v.value'));
        component.find('fifties-dollers-2').set('v.value',fifties2*50);
        helper.setTotal_2(component);
	},
    hundredsToDollers_2 : function(component, event, helper) {
		var hundreds2 = parseInt(component.find('hundreds-2').get('v.value'));
        component.find('hundreds-dollers-2').set('v.value',hundreds2*100);
        helper.setTotal_2(component);
	}
})