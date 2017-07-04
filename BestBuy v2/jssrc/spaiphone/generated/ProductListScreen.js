function addWidgetsProductListScreen() {
    ProductListScreen.setDefaultUnit(kony.flex.DP);
    var km20100f8ec124afd86e81dcea61608c3 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "55dp",
        "id": "BaseHeader",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km20100f8ec124afd86e81dcea61608c3.setDefaultUnit(kony.flex.DP);
    var km9e4b4e6829c44638646054f3e253566 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "Hamburgermenuopen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "70dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km9e4b4e6829c44638646054f3e253566.setDefaultUnit(kony.flex.DP);
    var km668fc23a43b47f6afba8ecd93c1994a = new kony.ui.Image2({
        "bottom": "10dp",
        "id": "Image08a993376487447",
        "left": "10dp",
        "right": "10dp",
        "src": "humburger.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km9e4b4e6829c44638646054f3e253566.add(km668fc23a43b47f6afba8ecd93c1994a);
    var km930560e4c4946429dae87f3e217fc92 = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexLogo",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0dp",
        "width": "80dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km930560e4c4946429dae87f3e217fc92.setDefaultUnit(kony.flex.DP);
    var km4ab8a7c58284930bb6112342fc9006b = new kony.ui.Image2({
        "bottom": 10,
        "id": "Image0a17294430bfd46",
        "imageWhileDownloading": "bestbuy.png",
        "left": "10dp",
        "right": "10dp",
        "src": "bestbuy.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km930560e4c4946429dae87f3e217fc92.add(km4ab8a7c58284930bb6112342fc9006b);
    var kmafb08b22e59431f988c41970b95c297 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexSearch",
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "top": "0dp",
        "width": "70dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmafb08b22e59431f988c41970b95c297.setDefaultUnit(kony.flex.DP);
    var kme8e55cc7c0745a197cd8780e9de94ab = new kony.ui.Image2({
        "bottom": "10dp",
        "id": "Image0ba7cf53d34c840",
        "left": "10dp",
        "right": "10dp",
        "src": "search.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmafb08b22e59431f988c41970b95c297.add(kme8e55cc7c0745a197cd8780e9de94ab);
    var km5bdd85f7f7546c7b13cd6c2209ba4c0 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "70dp",
        "pagingEnabled": false,
        "scrollDirection": 2,
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "70dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slFSbox"
    }, {}, {});
    km5bdd85f7f7546c7b13cd6c2209ba4c0.setDefaultUnit(kony.flex.DP);
    var km5029b8849234af8a4968b6fe13ce352 = new kony.ui.Image2({
        "bottom": "10dp",
        "id": "Image037bf8969579349",
        "left": "10dp",
        "right": "10dp",
        "src": "ic_menu_back.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km5bdd85f7f7546c7b13cd6c2209ba4c0.add(km5029b8849234af8a4968b6fe13ce352);
    var km4a2bf96012746889ad07d56371510d9 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "Hamburgermenucose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "70dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km4a2bf96012746889ad07d56371510d9.setDefaultUnit(kony.flex.DP);
    var km4390d6e8fa4455396538e5306ca34bd = new kony.ui.Image2({
        "bottom": "10dp",
        "id": "CopyImage0c9c59d47bf2448",
        "left": "10dp",
        "right": "10dp",
        "src": "humburger.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km4a2bf96012746889ad07d56371510d9.add(km4390d6e8fa4455396538e5306ca34bd);
    km20100f8ec124afd86e81dcea61608c3.add(km9e4b4e6829c44638646054f3e253566, km930560e4c4946429dae87f3e217fc92, kmafb08b22e59431f988c41970b95c297, km5bdd85f7f7546c7b13cd6c2209ba4c0, km4a2bf96012746889ad07d56371510d9);
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
        "maxNumberOfLines": null,
        "skin": "CopyslLabel0addf39ad6fb245",
        "text": "Home",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
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
            "Image01ac94c57b0364e": "arrow.png",
            "ImgProduct": "appmenuhome.png",
            "Onsale": "Label",
            "ProductListreview": "Label",
            "productListPrice": "Label",
            "productlistname": "Label"
        }, {
            "Image01ac94c57b0364e": "arrow.png",
            "ImgProduct": "appmenuhome.png",
            "Onsale": "Label",
            "ProductListreview": "Label",
            "productListPrice": "Label",
            "productlistname": "Label"
        }, {
            "Image01ac94c57b0364e": "arrow.png",
            "ImgProduct": "appmenuhome.png",
            "Onsale": "Label",
            "ProductListreview": "Label",
            "productListPrice": "Label",
            "productlistname": "Label"
        }],
        "groupCells": false,
        "height": "80%",
        "id": "ProductListSegmentent",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
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
        "focusSkin": "slButtonGlossRed",
        "height": "45dp",
        "id": "PreviousButton",
        "isVisible": true,
        "left": "2%",
        "onClick": AS_Button_1c6e68be0cf747459c5d47b331cdf8bd,
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
        "focusSkin": "slButtonGlossRed",
        "height": "45dp",
        "id": "NextButton",
        "isVisible": true,
        "onClick": AS_Button_43a99d2596ce4550b29b570e30236985,
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
        "width": "35%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexSegmentCategory.add(ProductListSegmentent, PreviousButton, NextButton, Totalpages);
    FlexProductListContent.add(LblResult, FlexSegmentCategory);
    ProductListScreen.add(km20100f8ec124afd86e81dcea61608c3, FlexProductListContent);
};

function ProductListScreenGlobals() {
    ProductListScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsProductListScreen,
        "enabledForIdleTimeout": false,
        "id": "ProductListScreen",
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
        "retainScrollPosition": false
    });
    ProductListScreen.info = {
        "kuid": "a0b90ec52dae4f2f9ca8aca9d8cdcdb1"
    };
};