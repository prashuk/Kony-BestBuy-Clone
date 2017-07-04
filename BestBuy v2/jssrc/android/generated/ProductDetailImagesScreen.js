function addWidgetsProductDetailImagesScreen() {
    ProductDetailImagesScreen.setDefaultUnit(kony.flex.DP);
    var MainFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MainFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0e21e7589f01249",
        "top": "0dp",
        "width": "100%",
        "zIndex": 101
    }, {}, {});
    MainFlex.setDefaultUnit(kony.flex.DP);
    var FlexProductListContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "id": "FlexProductListContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
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
    var detailimagessegment = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "groupCells": false,
        "height": "100%",
        "id": "detailimagessegment",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexImage,
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
            "FlexImage": "FlexImage",
            "ImgProductSeveral": "ImgProductSeveral"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexSegmentCategory.add(detailimagessegment);
    FlexProductListContent.add(FlexSegmentCategory);
    var km63fea879c4c42cb920fd9b741c91d28 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "9.50%",
        "id": "BaseHeader",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "zIndex": 101,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km63fea879c4c42cb920fd9b741c91d28.setDefaultUnit(kony.flex.DP);
    var kmf78d094ca98411d83ad30e93c26cf8d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_ae9d30878d1443d5bcf198203b7dd977,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmf78d094ca98411d83ad30e93c26cf8d.setDefaultUnit(kony.flex.DP);
    var km3023a8e81064055b21e1d5f4eee45dd = new kony.ui.Image2({
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
    kmf78d094ca98411d83ad30e93c26cf8d.add(km3023a8e81064055b21e1d5f4eee45dd);
    var kmf77a4c61c624f4397f5e2a947bfccd7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_950710bea56f4a9ba424d94c619adba1,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    kmf77a4c61c624f4397f5e2a947bfccd7.setDefaultUnit(kony.flex.DP);
    var km7bb1d8f106546c5b8d1a33f9cb3756f = new kony.ui.Image2({
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
    kmf77a4c61c624f4397f5e2a947bfccd7.add(km7bb1d8f106546c5b8d1a33f9cb3756f);
    var km4d2c9654c3140ab9a46d5b375c753c6 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "onClick": AS_FlexContainer_cba1aa116801441c9a4f1ea944dc9eaa,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km4d2c9654c3140ab9a46d5b375c753c6.setDefaultUnit(kony.flex.DP);
    var km4a6ac60f5ed4ce4a933e5e30309f77c = new kony.ui.Image2({
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
    km4d2c9654c3140ab9a46d5b375c753c6.add(km4a6ac60f5ed4ce4a933e5e30309f77c);
    var kmedd2f4d3a9e4857b8621543b1193e9c = new kony.ui.FlexContainer({
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
    kmedd2f4d3a9e4857b8621543b1193e9c.setDefaultUnit(kony.flex.DP);
    var km2d1db15a7254e2dbb53e71226757388 = new kony.ui.Image2({
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
    kmedd2f4d3a9e4857b8621543b1193e9c.add(km2d1db15a7254e2dbb53e71226757388);
    var kma3199b7df3f4e4c8a1f6ae19fa3fd9d = new kony.ui.FlexContainer({
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
    kma3199b7df3f4e4c8a1f6ae19fa3fd9d.setDefaultUnit(kony.flex.DP);
    var km6f372668ef144738c3b25fd422285c8 = new kony.ui.Image2({
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
    kma3199b7df3f4e4c8a1f6ae19fa3fd9d.add(km6f372668ef144738c3b25fd422285c8);
    km63fea879c4c42cb920fd9b741c91d28.add(kmf78d094ca98411d83ad30e93c26cf8d, kmf77a4c61c624f4397f5e2a947bfccd7, km4d2c9654c3140ab9a46d5b375c753c6, kmedd2f4d3a9e4857b8621543b1193e9c, kma3199b7df3f4e4c8a1f6ae19fa3fd9d);
    MainFlex.add(FlexProductListContent, km63fea879c4c42cb920fd9b741c91d28);
    var Mainapp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Mainapp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox09e66cbbcb2cf46",
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
        "onClick": AS_FlexContainer_c90455d5e37747ee9e02ccfaec07a88b,
        "skin": "slFbox09e66cbbcb2cf46",
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
        "skin": "slImage03e9cb38a77344d",
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
        "skin": "CopyslLabel0fa5e0c2db5f04c",
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
        "onClick": AS_FlexContainer_b8727b91b3a54f298aa09b653666b556,
        "skin": "slFbox09e66cbbcb2cf46",
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
        "skin": "slImage03e9cb38a77344d",
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
        "skin": "CopyslLabel08ec6d6b7fd0244",
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
        "onClick": AS_FlexContainer_f10776cb91c94fe68d9a28a0ce7136cc,
        "skin": "slFbox09e66cbbcb2cf46",
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
        "skin": "slImage03e9cb38a77344d",
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
        "skin": "CopyslLabel0d3d6c3df4fc94e",
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
        "skin": "CopyslFbox078367815456048",
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
        "skin": "CopyslFbox00204bb2e7af043",
        "top": "22%",
        "zIndex": 1
    }, {}, {});
    Divider2.setDefaultUnit(kony.flex.DP);
    Divider2.add();
    Mainapp.add(HamHomeSection, HamStoresSection, HamCartSection, Divider1, Divider2);
    ProductDetailImagesScreen.add(MainFlex, Mainapp);
};

function ProductDetailImagesScreenGlobals() {
    ProductDetailImagesScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsProductDetailImagesScreen,
        "enabledForIdleTimeout": false,
        "id": "ProductDetailImagesScreen",
        "init": AS_Form_978585f3aa5a421d92221cfed6d8785c,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
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
    ProductDetailImagesScreen.info = {
        "kuid": "ce6ec91638404f5c9fe01cd15d44912d"
    };
};