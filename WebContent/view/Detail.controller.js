jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.m.MessageToast");

sap.ui.controller("limaeslinda.view.Detail", {
	
	map: null,
	geocoder: null,

	handleNavButtonPress : function (evt) {
		this.nav.back("Main");
	},

	selectTab: function (oEvent) {
		var selItem = oEvent.getParameters().selectedItem;
		if (selItem.sId === "__filter2") {
			this.initialize_map();
		};
	},
	
	initialize_map : function () {
		var mapDiv = this.getView().byId("map_canvas");
		mapDiv.addStyleClass("myMap");
		geocoder = new google.maps.Geocoder();
        var mapOptions = {  
            center: new google.maps.LatLng(-12.04637, -77.04279),  
            zoom: 14,  
            mapTypeId: google.maps.MapTypeId.ROADMAP  
        };  
        var mapRef = mapDiv.getDomRef();
        map = new google.maps.Map(mapRef, mapOptions);
        this.codeAddress();
	},
	
	codeAddress : function () {
		geocoder.geocode({
			'address' : this.getLocationName()
		}, function(results, status) {
			if (status == google.maps.GeocoderStatus.OK) {
				map.setCenter(results[0].geometry.location);
				var marker = new google.maps.Marker({
					map : map,
					position : results[0].geometry.location
				});
			} else {
				alert("Geocode was not successful for the following reason: "
						+ status);
			}
		});
	},
	
	getLocationName : function() {
		var region = "Lima";
		var city = "Lima";
		var country = "Peru";
		var view = this.getView();
		var context = view.getBindingContext();
		var place = context.getProperty('Place');
		
		if ( place !== null) {
			return city + " " + region + " " + country + " " + place;
		} else {
			return city + " " + country + " " + region;
		}
	}
	
});
