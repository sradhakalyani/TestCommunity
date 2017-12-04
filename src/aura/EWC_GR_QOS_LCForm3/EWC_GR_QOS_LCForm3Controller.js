({
	doInit: function (component, event, helper) {
        var today = new Date();
        component.set('v.today');        
    },
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
                value= value+'ewc-dailyops-guestrelated';
                console.log(value);
                window.open(value, '_self');
               return false;

        }
})