sap.ui.define([
	"cpapp/ui5everything/controller/BaseController"

], function (BaseController) {
	"use strict";
	return BaseController.extend("cpapp.ui5everything.controller.NotFound", {
		onInit: function () {
            var oRouter, oTarget;
			oRouter = this.getRouter();
			oTarget = oRouter.getTarget("notFound");
			oTarget.attachDisplay(function (oEvent) {
				this._oData = oEvent.getParameter("data");	// store the data
			}, this);
		},
        // override the parent's onNavBack (inherited from BaseController)
		onNavBack : function () {
			if (this._oData && this._oData.fromTarget) {
				this.getRouter().getTargets().display(this._oData.fromTarget);
				delete this._oData.fromTarget;
				return;
			}

			// call the parent's onNavBack 
			BaseController.prototype.onNavBack.apply(this, arguments);
		}
	});
});