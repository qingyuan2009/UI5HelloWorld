sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
	"use strict";
	return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
		formatter: formatter,
		onInit: function () {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		},
		onFilterInvoices: function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.byId("invoiceList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onPress: function (oEvent) {
			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		},
		onRemoveRowsModel: function () {
			var oTable = this.getView().byId("invoiceList");
			var aSelectedItems = oTable.getSelectedItems();

			for (var i = 0; i < aSelectedItems.length; i++) {			
				var oItemContextPath = aSelectedItems[i].getBindingContextPath();
				var aPathParts = oItemContextPath.split("/");
				var iIndex = aPathParts[aPathParts.length - 1]; //Index to delete into our array of objects
				var oJSONData = this.getView().getModel("invoice").getData();				
				oJSONData.Invoices.splice(iIndex, 1); //Use splice to remove your object in the array
				this.getView().getModel("invoice").setData(oJSONData); //And set the new data to the model
			}
			console.log("The removed items are not in the model anymore");
			console.log(this.getView().getModel("invoice").getData())
		},
		onRemoveRowsUi: function(){
			var oTable = this.getView().byId("invoiceList");
			var aSelectedItems = oTable.getSelectedItems();
			
			for(var i=0; i<aSelectedItems.length; i++){
			  oTable.removeItem(aSelectedItems[i])
			}
			
			console.log("The removed items are still stored in the model");
			console.log(this.getView().getModel("invoice").getData())
		  }

	});
});