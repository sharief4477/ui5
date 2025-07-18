sap.ui.define([
	"cpapp/ui5everything/controller/BaseController",
    "sap/m/Button",
    "sap/m/MessageToast",
     "sap/ui/model/json/JSONModel",
      "sap/ui/model/resource/ResourceModel"

], function (BaseController,Button,MessageToast,JSONModel,ResourceModel) {
	"use strict";
	return BaseController.extend("cppapp.ui5everything.controller.Home", {
        onInit() {
     
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
         },

         //#region Fragment
         async onOpenDialog() {
            // create dialog lazily
            this.oDialog ??= await this.loadFragment({
                name: "cpapp.ui5everything.view.HelloDialog"
            });
        
            this.oDialog.open();
        },
        onCloseDialog() {
			this.byId("helloDialog").close();
		},
         //#endregion
        //No HASH Routing
         onDisplayNotFound : function () {
			//display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "TargetHome"
			});
		}
	});
});

// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/Button",
//     "sap/m/MessageToast",
//      "sap/ui/model/json/JSONModel",
//       "sap/ui/model/resource/ResourceModel"
// ], (Controller,Button,MessageToast,JSONModel,ResourceModel) => {
//     "use strict";

//     return Controller.extend("cpapp.ui5everything.controller.Home", {
//         onInit() {
     
//             //#region Placing button in whole page
//             // new Button({
//             //     text: "Ready...",
//             //     press() {
//             //         MessageToast.show("Hello World!");
//             //     }
//             // }).placeAt("content");
//             //#endregion
//         },
//         onShowHello() {
//          const oBundle = this.getView().getModel("i18n").getResourceBundle();
//          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
//          const sMsg = oBundle.getText("helloMsg", [sRecipient]);
//          MessageToast.show(sMsg);
//          },

//          //#region Fragment
//          async onOpenDialog() {
//             // create dialog lazily
//             this.oDialog ??= await this.loadFragment({
//                 name: "cpapp.ui5everything.view.HelloDialog"
//             });
        
//             this.oDialog.open();
//         },
//         onCloseDialog() {
// 			this.byId("helloDialog").close();
// 		},
//          //#endregion

//          onDisplayNotFound : function () {
// 			//display the "notFound" target without changing the hash
// 			this.getRouter().getTargets().display("notFound");
// 		}
//         //#region Mis
       
//         //#endregion
//     });
// });