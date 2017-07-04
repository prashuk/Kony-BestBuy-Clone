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
    var kmc68eb183a944cfeb2e53076b945a4d5 = new kony.ui.FlexContainer({
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
    kmc68eb183a944cfeb2e53076b945a4d5.setDefaultUnit(kony.flex.DP);
    var kmd4fc302382c4c388616249fe6e6d51d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_51283ea755fb4377ac0257588f0f608b,
        "top": "0%",
        "width": "11%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmd4fc302382c4c388616249fe6e6d51d.setDefaultUnit(kony.flex.DP);
    var km4c6bb5785f1482994a90de3fc57cdea = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image085bdd2f1a30f4e",
        "src": "humburger.png",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmd4fc302382c4c388616249fe6e6d51d.add(km4c6bb5785f1482994a90de3fc57cdea);
    var km3cfba82e9f74174bbe8aeb1711608c7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_34d23a517bc14a2096a672e34aa90ea8,
        "top": "0%",
        "width": "11%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km3cfba82e9f74174bbe8aeb1711608c7.setDefaultUnit(kony.flex.DP);
    var km2c0370bfeae4555b20679121d1bb29c = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image0d08b0c074b514f",
        "src": "humburger.png",
        "width": "70%",
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
    km3cfba82e9f74174bbe8aeb1711608c7.add(km2c0370bfeae4555b20679121d1bb29c);
    var km4d12b34b11c44158e8cfcb59942e3b1 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "11%",
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km4d12b34b11c44158e8cfcb59942e3b1.setDefaultUnit(kony.flex.DP);
    var km248f812ee074a60ac18be7f666b23ba = new kony.ui.Image2({
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
    km4d12b34b11c44158e8cfcb59942e3b1.add(km248f812ee074a60ac18be7f666b23ba);
    var kma35df1d1ce9441594188bf1bd5bb8d6 = new kony.ui.FlexContainer({
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
    kma35df1d1ce9441594188bf1bd5bb8d6.setDefaultUnit(kony.flex.DP);
    var kmcab04912c9e4cecbe5d6aabac9f259d = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image0f64725833a0345",
        "src": "bestbuy.png",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kma35df1d1ce9441594188bf1bd5bb8d6.add(kmcab04912c9e4cecbe5d6aabac9f259d);
    var km0e9ff008a724700a92859adfe48beac = new kony.ui.FlexContainer({
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
    km0e9ff008a724700a92859adfe48beac.setDefaultUnit(kony.flex.DP);
    var km6fb75e681b1412595c55eb5e32d77d7 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image02d2ed35262d249",
        "src": "search.png",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km0e9ff008a724700a92859adfe48beac.add(km6fb75e681b1412595c55eb5e32d77d7);
    var km0b5c674605c4467af8502ebb59d30fc = new kony.ui.FlexContainer({
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
    km0b5c674605c4467af8502ebb59d30fc.setDefaultUnit(kony.flex.DP);
    km0b5c674605c4467af8502ebb59d30fc.add();
    kmc68eb183a944cfeb2e53076b945a4d5.add(kmd4fc302382c4c388616249fe6e6d51d, km3cfba82e9f74174bbe8aeb1711608c7, km4d12b34b11c44158e8cfcb59942e3b1, kma35df1d1ce9441594188bf1bd5bb8d6, km0e9ff008a724700a92859adfe48beac, km0b5c674605c4467af8502ebb59d30fc);
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
            "ImgCart": "imagedrag.png",
            "LblProductCartName": "Label",
            "LblProductCartPrice": "Label"
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
            "onPull": AS_Segment_12a6961816ba4b809ae0fd6f4de4d694,
            "onPush": AS_Segment_38a1a5e792a64f1f9b8d0d91cff2cec9
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
    MainFlex.add(kmc68eb183a944cfeb2e53076b945a4d5, groupSegmetCart, LblQualifies, nodata);
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
        "onClick": AS_FlexContainer_4f59ce072667450fb8d9026c60042d1c,
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
        "onClick": AS_FlexContainer_eeafd4c228f243b2b2e447121ab9962f,
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
        "onClick": AS_FlexContainer_8c89cba4c63349a6865e838875eacde1,
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
        "init": AS_Form_0ea62c2a14fe450ebff853330c1a66d3,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "preShow": AS_Form_a70a34bc96d34d47aa1c73d0ae538e6e,
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
        "kuid": "b87b1ebb9bad44919b32473eda6bd592"
    };
};