sap.ui.controller("limaeslinda.view.App", {

	// Navigation - To
	to : function(pageId, context) {

		var app = this.getView().app;
		var viewType = "JS";
		
		// load Page
		var master = ("Main" === pageId);
		if (app.getPage(pageId, master) === null) {
			// Detail View
			if(pageId === "Detail"){
				viewType = "XML"; 
			}
			
			var page = sap.ui.view({
				id : pageId,
				viewName : "limaeslinda.view." + pageId,
				type : viewType
			});
			page.getController().nav = this;
			app.addPage(page, master);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}

		// show the page
		app.to(pageId);

		// set data context on the page
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
	},

	// Navigation - Back
	back : function(pageId) {
		this.getView().app.backToPage(pageId);
	}
});