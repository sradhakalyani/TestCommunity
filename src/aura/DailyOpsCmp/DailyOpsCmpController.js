({
	doInit: function (component, event, helper) {
        var today = new Date();
        component.set('v.today');
		helper.buildtreeitems(component);	
        
    },  
	//overrideHeaderStyle : function(component, event, helper){
    	// component.set("v.cssStyle", ".forceStyle .viewport.oneHeader.desktop {z-index:0} .forceStyle.desktop .viewport{overflow:hidden}");
  //   	component.set("v.cssStyle", ".forceStyle .viewport .oneHeader.slds-global-header_container {z-index:0} .forceStyle.desktop .viewport{overflow:hidden}");
	//},
  //  revertCssChange: function(component){
  //  	component.set("v.cssStyle", ".forceStyle .viewport .oneHeader.slds-global-header_container {z-index:5} .forceStyle.desktop .viewport{overflow:visible}");
//	},
    listSelect : function(component, event, helper) {
        component.set('v.popupcnt',event.getParam('name'));
    },
    openDailyOps : function(component, event, helper) {
		component.set('v.stage','1');
	},
    openBusinessSupport : function(component, event, helper) {
		component.set('v.stage','2');
	},
    openOnlineForms : function(component, event, helper) {
		component.set('v.stage','22');
	},
    openCreateSupportTickets : function(component, event, helper) {
		component.set('v.stage','3');
	},
	openDailyOperations : function(component, event, helper) {
		component.set('v.stage','32');
	},
    openSoftwareAndHardware : function(component, event, helper) {
		component.set('v.stage','4');
	},
	openLocationProcedures : function(component, event, helper) {
		component.set('v.stage','42');
	},
    openScrubOrderForm : function(component, event, helper) {
		component.set('v.stage','43');
	},
	openGuestRelatedForm : function(component, event, helper) {
		component.set('v.stage','44');
	},
    save: function(component, event, helper) {
		var popcnt = event.getSource().get("v.name");
		var fieldId = "fieldID" + popcnt;
        console.log(fieldId);
		var allValid = component.find(fieldId).reduce(function (validSoFar, inputCmp) {
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && !inputCmp.get('v.validity').valueMissing;
        }, true);
        if (allValid) {
            // alert('All form entries look valid. Ready to submit!');
            component.set('v.popupcnt','0');
			var toastEvent = $A.get("e.force:showToast"); 
			toastEvent.setParams({ 
				'title' : 'SUCCESS!', 
				'message' : 'Your ticket is submitted Successfully!' 
			}); 
			toastEvent.fire();  
            
		} else {
            alert('Please update the invalid form entries and try again.');
        }
	},
    cancel: function(component, event, helper) {
		component.set('v.popupcnt','0');
	}
})