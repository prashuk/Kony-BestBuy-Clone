function addWidgetsStoreLocatorScreen() {
    StoreLocatorScreen.setDefaultUnit(kony.flex.DP);
    var FlexStoreLocator = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexStoreLocator",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexStoreLocator.setDefaultUnit(kony.flex.DP);
    var FlexHomeContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "id": "FlexHomeContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": "56dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexHomeContent.setDefaultUnit(kony.flex.DP);
    var SearchTextfield = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "SearchTextfield",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "2%",
        "placeholder": "Enter City...",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "75%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var MapScreen = new kony.ui.Map({
        "bottom": "0%",
        "calloutTemplate": FlexMap,
        "calloutWidth": 80,
        "defaultPinImage": "pinb.png",
        "id": "MapScreen",
        "isVisible": true,
        "left": "0%",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "50dp",
        "widgetDataMapForCallout": {
            "FlexMap": "FlexMap",
            "ImgCompass": "ImgCompass",
            "LblAddress": "LblAddress",
            "LblMapCityRegion": "LblMapCityRegion",
            "LblMapPostalCode": "LblMapPostalCode",
            "LblMapStoreAddress": "LblMapStoreAddress",
            "LblMapStoreName": "LblMapStoreName"
        },
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "showZoomControl": true,
        "zoomLevel": 4
    });
    var SerchButton = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "SerchButton",
        "isVisible": true,
        "onClick": AS_Button_07739b5e6912498c9a8d636c504a6fe8,
        "right": "2%",
        "skin": "CopyslButtonGlossBlue04f25468c045746",
        "text": "Search",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexHomeContent.add(SearchTextfield, MapScreen, SerchButton);
    var kmaf22dd0df22465f849bfba7ab6812c6 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "9.50%",
        "id": "BaseHeader",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmaf22dd0df22465f849bfba7ab6812c6.setDefaultUnit(kony.flex.DP);
    var km5d66e41b8b24519bc64586a2e3237ff = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_83fc89949c0841d698adfb6ba5f8d3e6,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km5d66e41b8b24519bc64586a2e3237ff.setDefaultUnit(kony.flex.DP);
    var kmc6238bf480549c788d4adf43a7aa926 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image085bdd2f1a30f4e",
        "left": "0dp",
        "src": "humburger.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km5d66e41b8b24519bc64586a2e3237ff.add(kmc6238bf480549c788d4adf43a7aa926);
    var km431e9ed6ddb4040971e23864833b50c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_f2836c9dfa694296a4b67b2a3c0f3755,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km431e9ed6ddb4040971e23864833b50c.setDefaultUnit(kony.flex.DP);
    var km207b58f3e4b464d8803c0a0488b663e = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0d08b0c074b514f",
        "left": "0dp",
        "src": "humburger.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km431e9ed6ddb4040971e23864833b50c.add(km207b58f3e4b464d8803c0a0488b663e);
    var km97be844bae64ee4b06bfc1c6fcb7636 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "onClick": AS_FlexContainer_32e5b741fb5c4113ace1116740e810ae,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km97be844bae64ee4b06bfc1c6fcb7636.setDefaultUnit(kony.flex.DP);
    var kmb29e40ff18a4316bb21b151f269c03c = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0b65c1535a38d40",
        "left": "0dp",
        "src": "ic_menu_back.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km97be844bae64ee4b06bfc1c6fcb7636.add(kmb29e40ff18a4316bb21b151f269c03c);
    var kmcdd5eb8edb148449e491ff9482d742c = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexLogo",
        "layoutType": kony.flex.FREE_FORM,
        "top": "0%",
        "width": "20%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmcdd5eb8edb148449e491ff9482d742c.setDefaultUnit(kony.flex.DP);
    var kmb0a133b3d8a44c6bdadb8ee3a8011b7 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0f64725833a0345",
        "left": "0dp",
        "src": "bestbuy.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmcdd5eb8edb148449e491ff9482d742c.add(kmb0a133b3d8a44c6bdadb8ee3a8011b7);
    var km2a9a1edd27e481fba6340b31147f109 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexSearch",
        "layoutType": kony.flex.FREE_FORM,
        "right": "0%",
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km2a9a1edd27e481fba6340b31147f109.setDefaultUnit(kony.flex.DP);
    var kmecf2412daff4c41bc05a9f2f8f5c4b1 = new kony.ui.Image2({
        "height": "100%",
        "id": "Image02d2ed35262d249",
        "left": "0dp",
        "src": "search.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km2a9a1edd27e481fba6340b31147f109.add(kmecf2412daff4c41bc05a9f2f8f5c4b1);
    kmaf22dd0df22465f849bfba7ab6812c6.add(km5d66e41b8b24519bc64586a2e3237ff, km431e9ed6ddb4040971e23864833b50c, km97be844bae64ee4b06bfc1c6fcb7636, kmcdd5eb8edb148449e491ff9482d742c, km2a9a1edd27e481fba6340b31147f109);
    FlexStoreLocator.add(FlexHomeContent, kmaf22dd0df22465f849bfba7ab6812c6);
    StoreLocatorScreen.add(FlexStoreLocator);
};

function StoreLocatorScreenGlobals() {
    StoreLocatorScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsStoreLocatorScreen,
        "enabledForIdleTimeout": false,
        "id": "StoreLocatorScreen",
        "init": AS_Form_369f910cd3cd49aab0aeec958275b094,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm09515df17ed3143"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    StoreLocatorScreen.info = {
        "kuid": "2cc2aeb44f914aa6bb649ea545cd53ad"
    };
};