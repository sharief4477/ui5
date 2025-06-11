sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/Button",
    "sap/m/MessageToast",
     "sap/ui/model/json/JSONModel",
      "sap/ui/model/resource/ResourceModel"
], (Controller,Button,MessageToast,JSONModel,ResourceModel) => {
    "use strict";

    return Controller.extend("cpapp.ui5everything.controller.Home", {
        onInit() {
         //#region i18n Resource model
        //  const oData = {
        //     recipient : {
        //        name : "World"
        //     }
        //  };
        //  const oModel = new JSONModel(oData);
        //  this.getView().setModel(oModel);
        //  const i18nModel = new ResourceModel({
        //     bundleName: "cpapp.ui5everything.i18n.i18n"
        //  });
        //  this.getView().setModel(i18nModel, "i18n");
         //#endregion

            //#region Placing button in whole page
            // new Button({
            //     text: "Ready...",
            //     press() {
            //         MessageToast.show("Hello World!");
            //     }
            // }).placeAt("content");
            //#endregion
        },
        onShowHello() {
         const oBundle = this.getView().getModel("i18n").getResourceBundle();
         const sRecipient = this.getView().getModel().getProperty("/recipient/name");
         const sMsg = oBundle.getText("helloMsg", [sRecipient]);
         MessageToast.show(sMsg);
         }

        //#region Mis
       
        //#endregion
    });
});