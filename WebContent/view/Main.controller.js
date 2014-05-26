jQuery.sap.require("limaeslinda.util.Formatter");

sap.ui.controller("limaeslinda.view.Main", {
	
	handleListSelect : function (oEvent) {
		var context = oEvent.getParameter("listItem").getBindingContext();
		this.nav.to("Detail", context);
	},

	handleListItemPress : function (oEvent) {
		var context = oEvent.getSource().getBindingContext();
		this.nav.to("Detail", context);
	},

	handleSearch : function (oEvent) {

		// create model filter
		var filters = [];
		var query = oEvent.getParameter("query");
		if (query && query.length > 0) {
			var filter = new sap.ui.model.Filter("Place",
					sap.ui.model.FilterOperator.Contains, query);
			filters.push(filter);
		}

		// update list binding
		var view = this.getView();
		var list = view.byId("list");
		var binding = list.getBinding("items");
		binding.filter(filters);
	},
});