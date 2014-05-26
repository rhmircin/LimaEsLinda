jQuery.sap.declare("limaeslinda.Component");

sap.ui.core.UIComponent.extend("limaeslinda.Component", {

	createContent : function() {

		// create App view
		var oView = sap.ui.view({
			id : "app",
			viewName : "limaeslinda.view.App",
			type : "JS",
			viewData : { component : this }
		});
		
		// set i18n model
		var oI18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/i18n.properties"
		});
		oView.setModel(oI18nModel, "i18n");

		// set device model
		var oDeviceModel = new sap.ui.model.json.JSONModel({
			isTouch : sap.ui.Device.support.touch,
			isNoTouch : !sap.ui.Device.support.touch,
			isPhone : sap.ui.Device.system.phone,
			isNoPhone : !sap.ui.Device.system.phone,
			listMode : (sap.ui.Device.system.phone) ? "None" : "SingleSelectMaster",
			listItemType : (sap.ui.Device.system.phone) ? "Active" : "Inactive"
		});
		oDeviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(oDeviceModel, "device");

		// set Local model
		oView.setModel(new sap.ui.model.json.JSONModel("model/mock.json"));

		// return App view
		return oView;
	}
});