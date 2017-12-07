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
        helper.updateTotal(component,'pennies-1','pennies-dollers-1',0.01,'t-1');
	},
    nickelsToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'nickels-1','nickels-dollers-1',0.05,'t-1');
	},
    dimesToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'dimes-1','dimes-dollers-1',0.1,'t-1');
	},
    quartersToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'quarters-1','quarters-dollers-1',0.25,'t-1');
	},
    onesToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'ones-1','ones-dollers-1',1,'t-1');
	},
    fivesToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'fives-1','fives-dollers-1',1,'t-1');
	},
    tensToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'tens-1','tens-dollers-1',10,'t-1');
	},
    twentiesToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'twenties-1','twenties-dollers-1',20,'t-1');
	},
    fiftiesToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'fifties-1','fifties-dollers-1',50,'t-1');
	},
    hundredsToDollers_1 : function(component, event, helper) {
        helper.updateTotal(component,'hundreds-1','hundreds-dollers-1',100,'t-1');
	},
    tbFocus_1 : function(component, event, helper) {
        document.getElementById("tb-1").focus();
    },
    tbFocus_2 : function(component, event, helper) {
        document.getElementById("tb-2").focus();
    }
})