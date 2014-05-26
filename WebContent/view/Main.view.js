sap.ui.jsview("limaeslinda.view.Main", {

	getControllerName : function() {
		return "limaeslinda.view.Main";
	},

	createContent : function(oController) {
		
		// create List
		var list = new sap.m.List({
			id		  : this.createId("list"),
			mode 	  : "{device>/listMode}",
			select    : [ oController.handleListSelect, oController ],
		});
			
		// create Object Template
		var objectTemplate = new sap.m.ObjectListItem({
			title : "{Place}",
			number : "{GPS}",
			icon : "{Image}",
			type : "{device>/listItemType}",
			press : [ oController.handleListItemPress, oController ],
			attributes : [ new sap.m.ObjectAttribute({
				text : "{ID}"
			})],
			firstStatus : new sap.m.ObjectStatus({
				text :"{path: 'Status', formatter: 'limaeslinda.util.Formatter.statusText'}",
				state :"{path: 'Status', formatter: 'limaeslinda.util.Formatter.statusState'}"
			})
		});

		// bind Data model, Template and List
		list.bindItems("/records", objectTemplate);
		
		// create Search Field
		var searchField = new sap.m.SearchField({
			id : "searchField",
			width : "100%",
			enabled : true,
			visible : true,
			search : [ oController.handleSearch, oController ],
		});
		
		// create Main Bar for search field
		var mainBar = new sap.m.Bar({
			id : "mainBar", 
			enableFlexBox : false,
			translucent : false,
			contentLeft : [ searchField ], 
			contentMiddle : [],
			contentRight : []
		});
		
		// create Main Page
		var mainPage = new sap.m.Page({
			title : "{i18n>MainTitle}",
			content : [ mainBar, list ]
		});
		
		// return Main Page	
		return mainPage;
	}

});