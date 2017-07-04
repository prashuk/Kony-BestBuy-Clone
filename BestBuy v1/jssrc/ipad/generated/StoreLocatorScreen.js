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
        "skin": "CopyslFbox0da792b361fae42",
        "top": "0dp",
        "width": "100%",
        "zIndex": 101
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
        "top": "10%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexHomeContent.setDefaultUnit(kony.flex.DP);
    var SearchTextfield = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "8%",
        "id": "SearchTextfield",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "1%",
        "placeholder": "Enter State",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "1%",
        "width": "75%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "CopyslTextBox03bae3def5b844c",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
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
        "top": "11%",
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
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
        "zoomLevel": 4
    });
    var SerchButton = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0fdb685c8f1064e",
        "height": "8%",
        "id": "SerchButton",
        "isVisible": true,
        "onClick": AS_Button_e533e85bb085462a8c5fbde8e166e7e8,
        "right": "2%",
        "skin": "CopyslButtonGlossBlue04f25468c045746",
        "text": "Search",
        "top": "1%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    FlexHomeContent.add(SearchTextfield, MapScreen, SerchButton);
    var kmbf78a9cc0f44189b728f683b15c0fdd = new kony.ui.FlexContainer({
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
    kmbf78a9cc0f44189b728f683b15c0fdd.setDefaultUnit(kony.flex.DP);
    var km2621dc01e444d24b4fd6ef485dae7bd = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_1b5455ae8e9b43f7ba3fb9ade7284c46,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km2621dc01e444d24b4fd6ef485dae7bd.setDefaultUnit(kony.flex.DP);
    var km529d4a0374b420f8d4e561fa7920c8a = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image085bdd2f1a30f4e",
        "src": "humburger.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km2621dc01e444d24b4fd6ef485dae7bd.add(km529d4a0374b420f8d4e561fa7920c8a);
    var km3a7571950e4442a8a432cee354f7498 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_78b84b486ebd4e58be4c33429ad8d216,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km3a7571950e4442a8a432cee354f7498.setDefaultUnit(kony.flex.DP);
    var km6bdf20521ed41d2b4ba0747f4d164be = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image0d08b0c074b514f",
        "src": "humburger.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "top": "0dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km3a7571950e4442a8a432cee354f7498.add(km6bdf20521ed41d2b4ba0747f4d164be);
    var km3500a7a140949ae9f6698c94e436e6f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "onClick": AS_FlexContainer_21407c8399974823ad74a3100e0b9350,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km3500a7a140949ae9f6698c94e436e6f.setDefaultUnit(kony.flex.DP);
    var km45dd87e903a400bb6a40c01d8f5ccef = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image0b65c1535a38d40",
        "src": "ic_menu_back.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km3500a7a140949ae9f6698c94e436e6f.add(km45dd87e903a400bb6a40c01d8f5ccef);
    var kmf7b35beca374f6fbc69e59f41b48407 = new kony.ui.FlexContainer({
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
    kmf7b35beca374f6fbc69e59f41b48407.setDefaultUnit(kony.flex.DP);
    var km27b4ca953274ca69008e59d38c686ca = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image0f64725833a0345",
        "src": "bestbuy.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmf7b35beca374f6fbc69e59f41b48407.add(km27b4ca953274ca69008e59d38c686ca);
    var km4e5c08999724f47855fdf5a8d098a18 = new kony.ui.FlexContainer({
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
    km4e5c08999724f47855fdf5a8d098a18.setDefaultUnit(kony.flex.DP);
    var km64473fdd33742e3b57b100177363bcf = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image02d2ed35262d249",
        "src": "search.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km4e5c08999724f47855fdf5a8d098a18.add(km64473fdd33742e3b57b100177363bcf);
    var km1c32bcef6624c63b53370b34e54df8f = new kony.ui.FlexContainer({
        "bottom": "0%",
        "clipBounds": true,
        "height": "1.50%",
        "id": "FlexDivider",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "right": "0%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "CopyslFbox0b2747dcc0cde48"
    }, {}, {});
    km1c32bcef6624c63b53370b34e54df8f.setDefaultUnit(kony.flex.DP);
    km1c32bcef6624c63b53370b34e54df8f.add();
    kmbf78a9cc0f44189b728f683b15c0fdd.add(km2621dc01e444d24b4fd6ef485dae7bd, km3a7571950e4442a8a432cee354f7498, km3500a7a140949ae9f6698c94e436e6f, kmf7b35beca374f6fbc69e59f41b48407, km4e5c08999724f47855fdf5a8d098a18, km1c32bcef6624c63b53370b34e54df8f);
    FlexStoreLocator.add(FlexHomeContent, kmbf78a9cc0f44189b728f683b15c0fdd);
    var Mainapp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Mainapp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox03adcceee4b304d",
        "top": "0%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    Mainapp.setDefaultUnit(kony.flex.DP);
    var HamHomeSection = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "HamHomeSection",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_858c56c2791b46468d8d3d46a389511d,
        "skin": "slFbox03adcceee4b304d",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    HamHomeSection.setDefaultUnit(kony.flex.DP);
    var HamHomeImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "HamHomeImg",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage0acb29ab9e0f644",
        "src": "appmenuhome.png",
        "top": "2%",
        "width": "18%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var HamHomeLbl = new kony.ui.Label({
        "centerY": "50%",
        "id": "HamHomeLbl",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel06c760b85cc874d",
        "text": "Home",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    HamHomeSection.add(HamHomeImg, HamHomeLbl);
    var HamStoresSection = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "HamStoresSection",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_c99dea98bf9a481f9804c7dfc12978ea,
        "skin": "slFbox03adcceee4b304d",
        "top": "12%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    HamStoresSection.setDefaultUnit(kony.flex.DP);
    var HamStoresImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "HamStoresImg",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage0acb29ab9e0f644",
        "src": "appmenustore.png",
        "top": "2%",
        "width": "18%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var HamStoresLbl = new kony.ui.Label({
        "centerY": "50%",
        "id": "HamStoresLbl",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel003b87019fd9040",
        "text": "Stores",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    HamStoresSection.add(HamStoresImg, HamStoresLbl);
    var HamCartSection = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "HamCartSection",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_c7ae8f81df15423f8629987487dff732,
        "skin": "slFbox03adcceee4b304d",
        "top": "22%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    HamCartSection.setDefaultUnit(kony.flex.DP);
    var HamCartImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "HamCartImg",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage0acb29ab9e0f644",
        "src": "appmenucart.png",
        "top": "2%",
        "width": "18%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var HamCartLbl = new kony.ui.Label({
        "centerY": "50%",
        "id": "HamCartLbl",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel03eb1b2ec7f3042",
        "text": "Cart",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    HamCartSection.add(HamCartImg, HamCartLbl);
    var Divider1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2px",
        "id": "Divider1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox038afee85577c44",
        "top": "13%",
        "zIndex": 1
    }, {}, {});
    Divider1.setDefaultUnit(kony.flex.DP);
    Divider1.add();
    var Divider2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2px",
        "id": "Divider2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox02fa33a55de6749",
        "top": "22%",
        "zIndex": 1
    }, {}, {});
    Divider2.setDefaultUnit(kony.flex.DP);
    Divider2.add();
    Mainapp.add(HamHomeSection, HamStoresSection, HamCartSection, Divider1, Divider2);
    StoreLocatorScreen.add(FlexStoreLocator, Mainapp);
};

function StoreLocatorScreenGlobals() {
    StoreLocatorScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsStoreLocatorScreen,
        "enabledForIdleTimeout": false,
        "id": "StoreLocatorScreen",
        "init": AS_Form_8ece1531a70841ddb3425304e7e9d74b,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm09515df17ed3143"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    StoreLocatorScreen.info = {
        "kuid": "fa2e1a37cc184fe58a8d471ee6894ecd"
    };
};