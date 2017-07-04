function addWidgetsProductDetailImagesScreen() {
    ProductDetailImagesScreen.setDefaultUnit(kony.flex.DP);
    var km89c59e76f314fc6b1d651ee2afc01e7 = new kony.ui.FlexContainer({
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
    km89c59e76f314fc6b1d651ee2afc01e7.setDefaultUnit(kony.flex.DP);
    var kmfc0732b79af4f81be2e168a890ad31c = new kony.ui.FlexContainer({
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
    kmfc0732b79af4f81be2e168a890ad31c.setDefaultUnit(kony.flex.DP);
    var km3d5c9423d9940e9be8933a2e6e01e6e = new kony.ui.Image2({
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
    kmfc0732b79af4f81be2e168a890ad31c.add(km3d5c9423d9940e9be8933a2e6e01e6e);
    var kmbc9d1f55d1143fea092104fde797970 = new kony.ui.FlexContainer({
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
    kmbc9d1f55d1143fea092104fde797970.setDefaultUnit(kony.flex.DP);
    var km2ae2e384bd0454fb93e6503afab1b74 = new kony.ui.Image2({
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
    kmbc9d1f55d1143fea092104fde797970.add(km2ae2e384bd0454fb93e6503afab1b74);
    var kmadbca2a36f146e6a2ebe70301db27e7 = new kony.ui.FlexContainer({
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
    kmadbca2a36f146e6a2ebe70301db27e7.setDefaultUnit(kony.flex.DP);
    var km5df7fdd13ab48fcba878937c377d661 = new kony.ui.Image2({
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
    kmadbca2a36f146e6a2ebe70301db27e7.add(km5df7fdd13ab48fcba878937c377d661);
    var km32c1ea1a9bd412898086c6f663f2969 = new kony.ui.FlexScrollContainer({
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
    km32c1ea1a9bd412898086c6f663f2969.setDefaultUnit(kony.flex.DP);
    var km2af313c70614b1b934b369a49b1354b = new kony.ui.Image2({
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
    km32c1ea1a9bd412898086c6f663f2969.add(km2af313c70614b1b934b369a49b1354b);
    km89c59e76f314fc6b1d651ee2afc01e7.add(kmfc0732b79af4f81be2e168a890ad31c, kmbc9d1f55d1143fea092104fde797970, kmadbca2a36f146e6a2ebe70301db27e7, km32c1ea1a9bd412898086c6f663f2969);
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
    var FlexSegmentCategory = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bottom": "0%",
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexSegmentCategory",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "pagingEnabled": false,
        "right": "0%",
        "scrollDirection": kony.flex.SCROLL_VERTICAL,
        "skin": "CopyslFSbox081513cfc647f44",
        "top": "0%",
        "verticalScrollIndicator": true,
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexSegmentCategory.setDefaultUnit(kony.flex.DP);
    var SegmentCategory = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "Image04d235f31c25645": "imagedrag.png"
        }, {
            "Image04d235f31c25645": "imagedrag.png"
        }, {
            "Image04d235f31c25645": "imagedrag.png"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "SegmentCategory",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexShoppingCart0368d0604d2ca49,
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
            "FlexShoppingCart0368d0604d2ca49": "FlexShoppingCart0368d0604d2ca49",
            "Image04d235f31c25645": "Image04d235f31c25645"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexSegmentCategory.add(SegmentCategory);
    FlexProductListContent.add(FlexSegmentCategory);
    ProductDetailImagesScreen.add(km89c59e76f314fc6b1d651ee2afc01e7, FlexProductListContent);
};

function ProductDetailImagesScreenGlobals() {
    ProductDetailImagesScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsProductDetailImagesScreen,
        "enabledForIdleTimeout": false,
        "id": "ProductDetailImagesScreen",
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
    ProductDetailImagesScreen.info = {
        "kuid": "ce6ec91638404f5c9fe01cd15d44912d"
    };
};