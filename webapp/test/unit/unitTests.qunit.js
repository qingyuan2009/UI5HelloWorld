/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"rui/com/UI5HelloWorld/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});