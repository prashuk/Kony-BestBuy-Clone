function addWidgetsShoppingCartScreen() {
    ShoppingCartScreen.setDefaultUnit(kony.flex.DP);
    var km176fa7cbea24ec892aaa5e79c9643bc = new kony.ui.FlexContainer({
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
    km176fa7cbea24ec892aaa5e79c9643bc.setDefaultUnit(kony.flex.DP);
    var km041dbd6551c4f388315024d8fbbf5c0 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexHamburgerMenu",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "70dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km041dbd6551c4f388315024d8fbbf5c0.setDefaultUnit(kony.flex.DP);
    var kmfcbfcfedaed443388751fb0d0f68bf5 = new kony.ui.Image2({
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
    km041dbd6551c4f388315024d8fbbf5c0.add(kmfcbfcfedaed443388751fb0d0f68bf5);
    var km29fd63ad1ad487ba9eaa4259dc5c33f = new kony.ui.FlexContainer({
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
    km29fd63ad1ad487ba9eaa4259dc5c33f.setDefaultUnit(kony.flex.DP);
    var km4d65875b1ee45ef8d4841f609d5e2a6 = new kony.ui.Image2({
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
    km29fd63ad1ad487ba9eaa4259dc5c33f.add(km4d65875b1ee45ef8d4841f609d5e2a6);
    var kma36edcaed5641358bd9ea639cb1694f = new kony.ui.FlexContainer({
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
    kma36edcaed5641358bd9ea639cb1694f.setDefaultUnit(kony.flex.DP);
    var kmf49c3b396254a62bc7c92b941c99e5d = new kony.ui.Image2({
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
    kma36edcaed5641358bd9ea639cb1694f.add(kmf49c3b396254a62bc7c92b941c99e5d);
    var km94ec8453f7944fa813af5e4a5ec4865 = new kony.ui.FlexScrollContainer({
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
    km94ec8453f7944fa813af5e4a5ec4865.setDefaultUnit(kony.flex.DP);
    var km7e770833be94a81967fb16ee7170995 = new kony.ui.Image2({
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
    km94ec8453f7944fa813af5e4a5ec4865.add(km7e770833be94a81967fb16ee7170995);
    km176fa7cbea24ec892aaa5e79c9643bc.add(km041dbd6551c4f388315024d8fbbf5c0, km29fd63ad1ad487ba9eaa4259dc5c33f, kma36edcaed5641358bd9ea639cb1694f, km94ec8453f7944fa813af5e4a5ec4865);
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
    var SegmentShoppingCart = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "data": [{
            "Image04d235f31c25645": "imagedrag.png",
            "Label05746a4fa46ff40": "Label",
            "Label0c3d439fd2f7944": "Label"
        }, {
            "Image04d235f31c25645": "imagedrag.png",
            "Label05746a4fa46ff40": "Label",
            "Label0c3d439fd2f7944": "Label"
        }, {
            "Image04d235f31c25645": "imagedrag.png",
            "Label05746a4fa46ff40": "Label",
            "Label0c3d439fd2f7944": "Label"
        }],
        "groupCells": false,
        "id": "SegmentShoppingCart",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "right": "0dp",
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexShoppingCart,
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
            "FlexShoppingCart": "FlexShoppingCart",
            "Image04d235f31c25645": "Image04d235f31c25645",
            "Label05746a4fa46ff40": "Label05746a4fa46ff40",
            "Label0c3d439fd2f7944": "Label0c3d439fd2f7944"
        },
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexHomeContent.add(SegmentShoppingCart);
    ShoppingCartScreen.add(km176fa7cbea24ec892aaa5e79c9643bc, FlexHomeContent);
};

function ShoppingCartScreenGlobals() {
    ShoppingCartScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsShoppingCartScreen,
        "enabledForIdleTimeout": false,
        "id": "ShoppingCartScreen",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm09515df17ed3143"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    ShoppingCartScreen.info = {
        "kuid": "e6776aee063f4c3b80f270d0c83603fd"
    };
};