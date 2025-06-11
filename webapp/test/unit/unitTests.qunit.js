/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"cpapp/ui5everything/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
