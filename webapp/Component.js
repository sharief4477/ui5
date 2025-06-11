sap.ui.define([
    "sap/ui/core/UIComponent",
    "cpapp/ui5everything/model/models",
     "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], (UIComponent, models,JSONModel,ResourceModel) => {
    "use strict";

    return UIComponent.extend("cpapp.ui5everything.Component", {
        metadata: {
            manifest: "json",
            interfaces: [
                "sap.ui.core.IAsyncContentCreation"
            ]
            // ,"rootView": {//This gets handled in manifest.json
            //     "viewName": "cpapp.ui5everything.view.App",
            //     "type": "XML",
            //     "id": "app"
            //  }
        },

        init() {
            // call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
    
         const oData = {
            recipient : {
               name : "Sharief"
            }
         };
         const oModel = new JSONModel(oData);
         this.setModel(oModel);

         //#region i18n Resoource model
         const i18nModel = new ResourceModel({
            bundleName: "cpapp.ui5everything.i18n.i18n"
         });
         this.setModel(i18nModel, "i18n");
         //#endregion

            // set the device model
            this.setModel(models.createDeviceModel(), "device");

            // enable routing
            this.getRouter().initialize();
        }
    });
});