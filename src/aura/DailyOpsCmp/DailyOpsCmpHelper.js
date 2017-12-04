({
	buildtreeitems : function(component) {
        //DailyOps- Business Support - Create Support Tickets - Software And Hardware Issues
		var items1 = [{
            "label": "SOFTWARE ISSUES",
            "name": "swform",
            "expanded": false,
            "items": [{
                "label": "Software - Computers Servers and Workstations",
                "name": "1",
                "expanded": true,
                "items" : []
            },{
				"label": "Software - Installing and Updating Software",
				"name": "2",
				"expanded": true,
				"items" : []
            }]
    	},{
            "label": "HARDWARE ISSUES",
            "name": "hwform",
            "expanded": false,
            "items": [{
                "label": "Hardware - Pagers",
                "name": "3",
                "expanded": true,
                "items" : []
            },{
				"label": "Hardware - Printers",
				"name": "4",
				"expanded": true,
				"items" : []
            },{ 
				"label": "Hardware - Sonic Wall",
            	"name": "hwsonicwallform",
            	"expanded": true,
                "items": [{
					"label": "Replacing Sonic Wall router",
					"name": "5",
					"expanded": true,
					"items" : []
            	},{
					"label": "Installing a Camera System",
					"name": "6",
					"expanded": true,
					"items" : []
            	},{
					"label": "Sonic Wall is blocking certain websites",
					"name": "7",
					"expanded": true,
					"items" : []
            	}]
			},{
				"label": "Hardware - Computer",
				"name": "8",
				"expanded": true,
				"items" : []
            },{
				"label": "Hardware - Logitech Webcam",
				"name": "9",
				"expanded": true,
				"items" : []
            },{
				"label": "Hardware - Credit Card Readers",
				"name": "10",
				"expanded": true,
				"items" : []
            }]	
        }];
        component.set('v.items1', items1);
        //DailyOps - Online forms - Daily Ops - Location Procedures - Forms
		var items2 = [{
			"label": "Wax Room Check-In Form",
			"name": "11",
			"expanded": true,
			"items" : []
		},{
			"label": "Waxer Supplies Request Form",
			"name": "12",
			"expanded": true,
			"items" : []
		},{
			"label": "Wax Room Check-Out Form",
			"name": "13",
			"expanded": true,
			"items" : []
		},{
			"label": "Reception Supplies Request Form",
			"name": "14",
			"expanded": true,
			"items" : []
		},{
			"label": "Reservation Center Supply Request Form",
			"name": "15",
			"expanded": true,
			"items" : []
		},{
			"label": "In Store Delivery Notification Form",
			"name": "16",
			"expanded": true,
			"items" : []
		},{
			"label": "Location Maintenance Request Form",
			"name": "17",
			"expanded": true,
			"items" : []
		}];
        component.set('v.items2', items2);	
        
		//DailyOps - Online forms - Daily Ops - Scrub Order Form - Forms
		var items3 = [{
			"label": "Instructions for Completing the Online Srub Form",
			"name": "18",
			"expanded": true,
			"items" : []
		},{
			"label": "Link to Online Scrub Order Form",
			"name": "19",
			"expanded": true,
			"items" : []
		}];
        component.set('v.items3', items3);	
        
		//DailyOps - Online forms - Daily Ops - Guest Related - Forms
		var items4 = [{
			"label": "WAX PASS AND PAYMENT PLAN",
            "name": "guestrelated1",
            "expanded": false,
            "items": [{
				"label": "Associate Postdate Wax Pass Form",
				"name": "20",
				"expanded": true,
				"items" : []
			},{
				"label": "Request to Change a Wax Pass or Payment Plan",
				"name": "21",
				"expanded": true,
				"items" : []
			}]
        },{	
            "label": "GUEST PROFILE ISSUES",
            "name": "guestrelated2",
            "expanded": false,
            "items": [{
				"label": "GND (Guest not in database) Form",
				"name": "22",
				"expanded": true,
				"items" : []
			},{
				"label": "Points Issue",
				"name": "23",
				"expanded": true,
				"items" : []
			},{
				"label": "Merging Duplicate Guests",
				"name": "24",
				"expanded": true,
				"items" : []
            }]
		},{
			"label": "RESERVATIONS",
            "name": "guestrelated3",
            "expanded": false,
            "items": [{
				"label": "Booking Error Form",
				"name": "25",
				"expanded": true,
				"items" : []
			},{
				"label": "No Show Form (Use when guest has 3 or more no-shows):",
				"name": "26",
				"expanded": true,
				"items" : []
			},{
				"label": "Medical Alert Form",	
				"name": "27",
				"expanded": true,
				"items" : []
            }]
        },{
			"label": "REGISTER TRANSACTIONS",
            "name": "guestrelated4",
            "expanded": false,
            "items": [{
				"label": "Product Return Form",
				"name": "28",
				"expanded": true,
				"items" : []
			},{
				"label": "Charged Incorrectly Form",
				"name": "29",
				"expanded": true,
				"items" : []
			},{
				"label": "Unattached Transactions for GSA",	
				"name": "30",
				"expanded": true,
				"items" : []
            }]   
        },{
			"label": "QUALITY OF SERVICE ISSUES",
            "name": "guestrelated5",
            "expanded": false,
            "items": [{
				"label": "Unsatisfied with Service",
				"name": "31",
				"expanded": true,
				"items" : []
			},{
				"label": "Unsatisfied with Associate",
				"name": "32",
				"expanded": true,
				"items" : []
			},{
				"label": "Unsatisfied with the Facility",	
				"name": "33",
				"expanded": true,
				"items" : []
			},{
				"label": "Touch up Form",	
				"name": "34",
				"expanded": true,
				"items" : []
            }] 
        
		}];
        component.set('v.items4', items4);	
				
	}
    
})