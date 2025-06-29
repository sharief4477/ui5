sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("cpapp.ui5everything.controller.App", {
      onInit() {//content density
        this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      }
  });
});