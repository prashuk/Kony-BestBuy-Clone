function addWidgetsProductListScreen() {
    ProductListScreen.setDefaultUnit(kony.flex.DP);
    var MainFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MainFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox032c1f66be1734e",
        "top": "0dp",
        "width": "100%",
        "zIndex": 101
    }, {}, {});
    MainFlex.setDefaultUnit(kony.flex.DP);
    var FlexProductListContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "92%",
        "id": "FlexProductListContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": "9.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexProductListContent.setDefaultUnit(kony.flex.DP);
    var LblResult = new kony.ui.Label({
        "height": "8%",
        "id": "LblResult",
        "isVisible": true,
        "left": "10dp",
        "maxNumberOfLines": 3,
        "skin": "CopyslLabel0addf39ad6fb245",
        "text": "Home",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexSegmentCategory = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "85%",
        "horizontalScrollIndicator": true,
        "id": "FlexSegmentCategory",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "pagingEnabled": false,
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox081513cfc647f44",
        "top": "13%",
        "verticalScrollIndicator": true,
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    FlexSegmentCategory.setDefaultUnit(kony.flex.DP);
    var ProductListSegmentent = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Image01ac94c57b0364e": "",
            "ImgProduct": "",
            "Onsale": "",
            "ProductListreview": "",
            "productListPrice": "",
            "productlistname": ""
        }],
        "groupCells": false,
        "height": "80%",
        "id": "ProductListSegmentent",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_04c66f8593084e219e445fe62caf7f5f,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg0d25db02570a943",
        "rowTemplate": FlexProductList,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0dp",
        "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
        "widgetDataMap": {
            "FlexProductList": "FlexProductList",
            "Image01ac94c57b0364e": "Image01ac94c57b0364e",
            "ImgProduct": "ImgProduct",
            "Onsale": "Onsale",
            "ProductListreview": "ProductListreview",
            "productListPrice": "productListPrice",
            "productlistname": "productlistname"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var PreviousButton = new kony.ui.Button({
        "bottom": "2%",
        "focusSkin": "CopyslButtonGlossRed09d1b7f72af954f",
        "height": "45dp",
        "id": "PreviousButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_ab8095a2d5ab4b6885bf143fa48446f3,
        "skin": "CopyslButtonGlossBlue08b31f783a2a14c",
        "text": "<< Pre",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var NextButton = new kony.ui.Button({
        "bottom": "2%",
        "focusSkin": "CopyslButtonGlossRed0f44474ed01414d",
        "height": "45dp",
        "id": "NextButton",
        "isVisible": true,
        "onClick": AS_Button_9de96cb59fd5424099b917405666da3c,
        "right": "2%",
        "skin": "CopyslButtonGlossBlue086efd87bd4ca49",
        "text": "Next >>",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Totalpages = new kony.ui.Label({
        "bottom": "5%",
        "centerX": "50%",
        "id": "Totalpages",
        "isVisible": true,
        "skin": "CopyslLabel06b412de4bff041",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexSegmentCategory.add(ProductListSegmentent, PreviousButton, NextButton, Totalpages);
    FlexProductListContent.add(LblResult, FlexSegmentCategory);
    var km14c225fc129497e95b4392a9060df33 = new kony.ui.FlexContainer({
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
    km14c225fc129497e95b4392a9060df33.setDefaultUnit(kony.flex.DP);
    var km9be93d9693e4928ac5abbeb687a3c5e = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_0091d0c4199b473e8965347af21502aa,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km9be93d9693e4928ac5abbeb687a3c5e.setDefaultUnit(kony.flex.DP);
    var kme064c98f0694e2e9ebadd07a9f5633a = new kony.ui.Image2({
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
    km9be93d9693e4928ac5abbeb687a3c5e.add(kme064c98f0694e2e9ebadd07a9f5633a);
    var kmc6aafa1e9034b74af1f9f2da5545370 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_46ae63b169284f31b50cdfea9a5384d3,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    kmc6aafa1e9034b74af1f9f2da5545370.setDefaultUnit(kony.flex.DP);
    var km1adaea8cf864e6d9d4df59d4fb9ca1d = new kony.ui.Image2({
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
    kmc6aafa1e9034b74af1f9f2da5545370.add(km1adaea8cf864e6d9d4df59d4fb9ca1d);
    var km186e1f6c9dc4d4badc6b98503e6e20c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "onClick": AS_FlexContainer_4a2b50531e4e48cea5074bf5dc997ec3,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km186e1f6c9dc4d4badc6b98503e6e20c.setDefaultUnit(kony.flex.DP);
    var kme8d8f5564c64425beec4b87d2a9c565 = new kony.ui.Image2({
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
    km186e1f6c9dc4d4badc6b98503e6e20c.add(kme8d8f5564c64425beec4b87d2a9c565);
    var kmefca1203f6a4682aafccdf98d3a6b33 = new kony.ui.FlexContainer({
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
    kmefca1203f6a4682aafccdf98d3a6b33.setDefaultUnit(kony.flex.DP);
    var km48673b0923f4f11aa8196771f970506 = new kony.ui.Image2({
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
    kmefca1203f6a4682aafccdf98d3a6b33.add(km48673b0923f4f11aa8196771f970506);
    var km2cd31fb424744fa8aa21cb3109bab05 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "13%",
        "id": "FlexSearch",
        "layoutType": kony.flex.FREE_FORM,
        "right": "0%",
        "top": "0%",
        "width": "20%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km2cd31fb424744fa8aa21cb3109bab05.setDefaultUnit(kony.flex.DP);
    var km7de3f079aad4a1ba31b7125cbfcc27b = new kony.ui.Image2({
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
    km2cd31fb424744fa8aa21cb3109bab05.add(km7de3f079aad4a1ba31b7125cbfcc27b);
    km14c225fc129497e95b4392a9060df33.add(km9be93d9693e4928ac5abbeb687a3c5e, kmc6aafa1e9034b74af1f9f2da5545370, km186e1f6c9dc4d4badc6b98503e6e20c, kmefca1203f6a4682aafccdf98d3a6b33, km2cd31fb424744fa8aa21cb3109bab05);
    MainFlex.add(FlexProductListContent, km14c225fc129497e95b4392a9060df33);
    var Mainapp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Mainapp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0a2a2d48316d445",
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
        "onClick": AS_FlexContainer_774ea036abd245a9a9fb32b66f30b0f5,
        "skin": "slFbox0a2a2d48316d445",
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
        "skin": "slImage08e860062108b40",
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
        "skin": "CopyslLabel0ffdc48afddf144",
        "text": "Home",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "onClick": AS_FlexContainer_9b630ee48ce24efcadf94d4e5ba3902c,
        "skin": "slFbox0a2a2d48316d445",
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
        "skin": "slImage08e860062108b40",
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
        "skin": "CopyslLabel0c4defb6162414e",
        "text": "Stores",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "onClick": AS_FlexContainer_189a72d2655c411c866fe765a8b01c01,
        "skin": "slFbox0a2a2d48316d445",
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
        "skin": "slImage08e860062108b40",
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
        "skin": "CopyslLabel0bfeb625f801449",
        "text": "Cart",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "skin": "CopyslFbox0b929c7dfa34b4b",
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
        "skin": "CopyslFbox0478d5684e5db47",
        "top": "22%",
        "zIndex": 1
    }, {}, {});
    Divider2.setDefaultUnit(kony.flex.DP);
    Divider2.add();
    Mainapp.add(HamHomeSection, HamStoresSection, HamCartSection, Divider1, Divider2);
    ProductListScreen.add(MainFlex, Mainapp);
};

function ProductListScreenGlobals() {
    ProductListScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsProductListScreen,
        "enabledForIdleTimeout": false,
        "id": "ProductListScreen",
        "init": AS_Form_fdb35df281144cb08e1f26da2f92a89f,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_434886ef9d8c430a8345c970c539578d,
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
    ProductListScreen.info = {
        "kuid": "a0b90ec52dae4f2f9ca8aca9d8cdcdb1"
    };
};