function addWidgetsHomeScreen() {
    HomeScreen.setDefaultUnit(kony.flex.DP);
    var km333eeef7d9144d9ad70037d7aa212f3 = new kony.ui.FlexContainer({
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
    km333eeef7d9144d9ad70037d7aa212f3.setDefaultUnit(kony.flex.DP);
    var kmc59ddee057446e98d93c9740e3965d7 = new kony.ui.FlexContainer({
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
    kmc59ddee057446e98d93c9740e3965d7.setDefaultUnit(kony.flex.DP);
    var km3e2b5aae9f247e99401bbacf2ad6200 = new kony.ui.Image2({
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
    kmc59ddee057446e98d93c9740e3965d7.add(km3e2b5aae9f247e99401bbacf2ad6200);
    var km2f1cc4a3e9b4b1fbd02bbfcdb188850 = new kony.ui.FlexContainer({
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
    km2f1cc4a3e9b4b1fbd02bbfcdb188850.setDefaultUnit(kony.flex.DP);
    var kmb1a22ccf9ec4a0995e7cb8b8c8770c0 = new kony.ui.Image2({
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
    km2f1cc4a3e9b4b1fbd02bbfcdb188850.add(kmb1a22ccf9ec4a0995e7cb8b8c8770c0);
    var kma9fb4b3f3b342448d1899d2fd32b825 = new kony.ui.FlexContainer({
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
    kma9fb4b3f3b342448d1899d2fd32b825.setDefaultUnit(kony.flex.DP);
    var kmd3eabbbce6a4409a305542a9a3ea244 = new kony.ui.Image2({
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
    kma9fb4b3f3b342448d1899d2fd32b825.add(kmd3eabbbce6a4409a305542a9a3ea244);
    var kma05894e9a3d4989b877c261f0264d3c = new kony.ui.FlexScrollContainer({
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
    kma05894e9a3d4989b877c261f0264d3c.setDefaultUnit(kony.flex.DP);
    var kmceb5c825ee94b7c9575089b004a48dc = new kony.ui.Image2({
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
    kma05894e9a3d4989b877c261f0264d3c.add(kmceb5c825ee94b7c9575089b004a48dc);
    var km0f68fe728c14faa9a348ef6a3750411 = new kony.ui.FlexContainer({
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
    km0f68fe728c14faa9a348ef6a3750411.setDefaultUnit(kony.flex.DP);
    var km910ac85d4a54b6eb84b60daa1661536 = new kony.ui.Image2({
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
    km0f68fe728c14faa9a348ef6a3750411.add(km910ac85d4a54b6eb84b60daa1661536);
    km333eeef7d9144d9ad70037d7aa212f3.add(kmc59ddee057446e98d93c9740e3965d7, km2f1cc4a3e9b4b1fbd02bbfcdb188850, kma9fb4b3f3b342448d1899d2fd32b825, kma05894e9a3d4989b877c261f0264d3c, km0f68fe728c14faa9a348ef6a3750411);
    var FlexHomeContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "height": "92%",
        "id": "FlexHomeContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": "9.50%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexHomeContent.setDefaultUnit(kony.flex.DP);
    var LblBreadcrumb = new kony.ui.Label({
        "height": "8%",
        "id": "LblBreadcrumb",
        "isVisible": true,
        "left": "1%",
        "maxNumberOfLines": null,
        "skin": "CopyslLabel0addf39ad6fb245",
        "text": "Home",
        "top": "3%",
        "width": "98%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var FlexSegmentProductList = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "85%",
        "horizontalScrollIndicator": true,
        "id": "FlexSegmentProductList",
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
    FlexSegmentProductList.setDefaultUnit(kony.flex.DP);
    var SegmentProductList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "ImgNavigation": "arrow.png",
            "LblProductName": "Label"
        }, {
            "ImgNavigation": "arrow.png",
            "LblProductName": "Label"
        }, {
            "ImgNavigation": "arrow.png",
            "LblProductName": "Label"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "SegmentProductList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_34c938d4e8074f7c816661cc796ec724,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "Copyseg083035674cce54f",
        "rowTemplate": FlexCategory,
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
            "FlexCategory": "FlexCategory",
            "ImgNavigation": "ImgNavigation",
            "LblProductName": "LblProductName"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexSegmentProductList.add(SegmentProductList);
    FlexHomeContent.add(LblBreadcrumb, FlexSegmentProductList);
    HomeScreen.add(km333eeef7d9144d9ad70037d7aa212f3, FlexHomeContent);
};

function HomeScreenGlobals() {
    HomeScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsHomeScreen,
        "enabledForIdleTimeout": false,
        "id": "HomeScreen",
        "init": AS_Form_4bc1364a8b7a47d8a06855f54b098215,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_4dbd9db6aefc4622a59302394727ad18,
        "skin": "CopyslForm09515df17ed3143"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    HomeScreen.info = {
        "kuid": "c29094bae11a44feb27a5c67c71055a9"
    };
};