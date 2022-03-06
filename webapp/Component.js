sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/demo/walkthrough/model/models",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function (UIComponent, Device, models, JSONModel, ResourceModel) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.walkthrough.Component", {

		metadata : {
            interfaces: ["sap.ui.core.IAsyncContentCreation"],
            manifest: "json"
      	},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			//this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// set data model
			var oData = {
				recipient : {
				   name : "World"
				}
			 };
			 var oModel = new JSONModel(oData);
			 this.setModel(oModel);
	
			 // set i18n model
			 var i18nModel = new ResourceModel({
				bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
			 });
			 this.setModel(i18nModel, "i18n");
		}
	});
});