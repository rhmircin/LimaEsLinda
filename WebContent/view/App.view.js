sap.ui.jsview("limaeslinda.view.App", {

	getControllerName : function() {
		return "limaeslinda.view.App";
	},

	createContent : function(oController) {
		// avoid scroll bars
		this.setDisplayBlock(true);
		
		// create SplitApp
		this.app = new sap.m.SplitApp({
			initialPage : "Main",
			defaultTransitionNameDetail : "fade", // "show"
			defaultTransitionNameMaster : "slide",
		});
		
		// load the Main page
		var main = sap.ui.jsview("Main", "limaeslinda.view.Main");
		main.getController().nav = this.getController();
		this.app.addPage(main, true);

		// load the Empty page
		var empty = sap.ui.xmlview("Empty", "limaeslinda.view.Empty");
		this.app.addPage(empty, false);
		
		// return SplitApp
		return this.app;
	}

});