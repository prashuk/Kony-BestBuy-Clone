function addWidgetsShoppingCartScreen() {
    ShoppingCartScreen.setDefaultUnit(kony.flex.DP);
    var MainFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MainFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0d73e7ed32d8a4f",
        "width": "100%",
        "zIndex": 101
    }, {}, {});
    MainFlex.setDefaultUnit(kony.flex.DP);
    var km2eb7f9b3c464c9ca3eb6d1db5440083 = new kony.ui.FlexContainer({
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
    km2eb7f9b3c464c9ca3eb6d1db5440083.setDefaultUnit(kony.flex.DP);
    var km8ce0318e1e6480dbfb8a70c61644638 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_3dce1f14cf8d417e91dfcaa25a6d794e,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km8ce0318e1e6480dbfb8a70c61644638.setDefaultUnit(kony.flex.DP);
    var km0122b37fa254e4ba956a90d2602d3cf = new kony.ui.Image2({
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
    km8ce0318e1e6480dbfb8a70c61644638.add(km0122b37fa254e4ba956a90d2602d3cf);
    var km0c7d5802ccf436ebbbc6b4b7e7307ef = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_b9f01180639d40eba8cc698cf3a82383,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km0c7d5802ccf436ebbbc6b4b7e7307ef.setDefaultUnit(kony.flex.DP);
    var km26a701430e24ee4a5df2cf0fd9767cb = new kony.ui.Image2({
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
    km0c7d5802ccf436ebbbc6b4b7e7307ef.add(km26a701430e24ee4a5df2cf0fd9767cb);
    var km8ab5519533e4b12ad1d7406b4d7ddb5 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km8ab5519533e4b12ad1d7406b4d7ddb5.setDefaultUnit(kony.flex.DP);
    var km5c19e91a3154021a5c794739794c99a = new kony.ui.Image2({
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
    km8ab5519533e4b12ad1d7406b4d7ddb5.add(km5c19e91a3154021a5c794739794c99a);
    var kma67b44878bb4b2088ff23c13410f48c = new kony.ui.FlexContainer({
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
    kma67b44878bb4b2088ff23c13410f48c.setDefaultUnit(kony.flex.DP);
    var kmbc66cfcc31949eab69f66306f25102b = new kony.ui.Image2({
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
    kma67b44878bb4b2088ff23c13410f48c.add(kmbc66cfcc31949eab69f66306f25102b);
    var kme24d2c8dc664afbb382a85a77a468eb = new kony.ui.FlexContainer({
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
    kme24d2c8dc664afbb382a85a77a468eb.setDefaultUnit(kony.flex.DP);
    var km0ab41514c814be7b85d4a02ae427ed2 = new kony.ui.Image2({
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
    kme24d2c8dc664afbb382a85a77a468eb.add(km0ab41514c814be7b85d4a02ae427ed2);
    var kmb12fbbc71c74cdc94e099307a12e6f8 = new kony.ui.FlexContainer({
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
    kmb12fbbc71c74cdc94e099307a12e6f8.setDefaultUnit(kony.flex.DP);
    kmb12fbbc71c74cdc94e099307a12e6f8.add();
    km2eb7f9b3c464c9ca3eb6d1db5440083.add(km8ce0318e1e6480dbfb8a70c61644638, km0c7d5802ccf436ebbbc6b4b7e7307ef, km8ab5519533e4b12ad1d7406b4d7ddb5, kma67b44878bb4b2088ff23c13410f48c, kme24d2c8dc664afbb382a85a77a468eb, kmb12fbbc71c74cdc94e099307a12e6f8);
    var groupSegmetCart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "75%",
        "id": "groupSegmetCart",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "0dp",
        "maxWidth": "75%",
        "skin": "slFbox",
        "top": "9.50%",
        "width": "100%"
    }, {}, {});
    groupSegmetCart.setDefaultUnit(kony.flex.DP);
    var SegmentShoppingCart = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
        "data": [{
            "ImgCart": "",
            "LblProductCartName": "",
            "LblProductCartPrice": ""
        }],
        "groupCells": false,
        "id": "SegmentShoppingCart",
        "isVisible": true,
        "maxHeight": "75%",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0513b8e479e6542",
        "rowTemplate": FlexShoppingCart,
        "scrollingEvents": {
            "onPull": AS_Segment_60c43ce7061343439f2e6350e33716e5,
            "onPush": AS_Segment_45e6483d213d4afaae0675338f6e5a35
        },
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexImgCart": "FlexImgCart",
            "FlexShoppingCart": "FlexShoppingCart",
            "ImgCart": "ImgCart",
            "LblProductCartName": "LblProductCartName",
            "LblProductCartPrice": "LblProductCartPrice"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    var Totalcontent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "Totalcontent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    Totalcontent.setDefaultUnit(kony.flex.DP);
    var statictotal = new kony.ui.Label({
        "height": "100%",
        "id": "statictotal",
        "isVisible": true,
        "left": "53%",
        "skin": "CopyslLabel0cdc8e187c7834d",
        "text": "Total :",
        "top": "0%",
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
    var totalvalue = new kony.ui.Label({
        "height": "100%",
        "id": "totalvalue",
        "isVisible": true,
        "left": "65%",
        "skin": "CopyslLabel0af2ce692c3e944",
        "text": "Label",
        "top": "0%",
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
    Totalcontent.add(statictotal, totalvalue);
    groupSegmetCart.add(SegmentShoppingCart, Totalcontent);
    var LblQualifies = new kony.ui.Label({
        "height": "5%",
        "id": "LblQualifies",
        "isVisible": false,
        "left": "0%",
        "skin": "CopyslLabel0e5a7f3dcfa724f",
        "text": "Your order qualifies for Free Shipping !!!",
        "top": "85%",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var nodata = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "25%",
        "height": "20%",
        "id": "nodata",
        "isVisible": false,
        "left": "0%",
        "maxNumberOfLines": 2,
        "skin": "CopyslLabel0740e06c1967a48",
        "text": "Shopping Cart is Empty. Please browse Products and add them to your Cart.",
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "0%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    MainFlex.add(km2eb7f9b3c464c9ca3eb6d1db5440083, groupSegmetCart, LblQualifies, nodata);
    var Mainapp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Mainapp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0dee59ef624b94b",
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
        "onClick": AS_FlexContainer_fec5151f24c748c987379f242f2073aa,
        "skin": "slFbox0dee59ef624b94b",
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
        "skin": "slImage04947a705706544",
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
        "skin": "CopyslLabel0b41fc88f08fd4b",
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
        "onClick": AS_FlexContainer_d10006385d5b4e74b53b8f0c0e5ddc71,
        "skin": "slFbox0dee59ef624b94b",
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
        "skin": "slImage04947a705706544",
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
        "skin": "CopyslLabel087017772ea694c",
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
        "onClick": AS_FlexContainer_8f4e10ecc85e4291901d063d3d65ecc7,
        "skin": "slFbox0dee59ef624b94b",
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
        "skin": "slImage04947a705706544",
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
        "skin": "CopyslLabel004f1873541524f",
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
        "skin": "CopyslFbox0e0177cdaad6d4f",
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
        "skin": "CopyslFbox0b7d1caadbcd34b",
        "top": "22%",
        "zIndex": 1
    }, {}, {});
    Divider2.setDefaultUnit(kony.flex.DP);
    Divider2.add();
    Mainapp.add(HamHomeSection, HamStoresSection, HamCartSection, Divider1, Divider2);
    ShoppingCartScreen.add(MainFlex, Mainapp);
};

function ShoppingCartScreenGlobals() {
    ShoppingCartScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsShoppingCartScreen,
        "enabledForIdleTimeout": true,
        "id": "ShoppingCartScreen",
        "init": AS_Form_79e7974b08db424682548737d12b15ef,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_92d3b1275cb549678ce1723909c1bae8,
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
    ShoppingCartScreen.info = {
        "kuid": "e6776aee063f4c3b80f270d0c83603fd"
    };
};