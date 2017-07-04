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
        "data": [{
            "ImgProductSeveral": "imagedrag.png"
        }, {
            "ImgProductSeveral": "imagedrag.png"
        }, {
            "ImgProductSeveral": "imagedrag.png"
        }],
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
        "rowSkin": "Copyseg0369c061e940442",
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
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    FlexSegmentCategory.add(detailimagessegment);
    FlexProductListContent.add(FlexSegmentCategory);
    var km4e085d74f3f4ad2b3b991dfdfd61821 = new kony.ui.FlexContainer({
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
    km4e085d74f3f4ad2b3b991dfdfd61821.setDefaultUnit(kony.flex.DP);
    var kmb2367c6ae624cfbaf245a76ca7b7fac = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_fb2b2c5769d0430c9b113d239d413d7a,
        "top": "0%",
        "width": "11%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmb2367c6ae624cfbaf245a76ca7b7fac.setDefaultUnit(kony.flex.DP);
    var km05195d074744a0b86b53d1006e2a555 = new kony.ui.Image2({
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
    kmb2367c6ae624cfbaf245a76ca7b7fac.add(km05195d074744a0b86b53d1006e2a555);
    var km90faba1bd2e487f8920bd08a707d8d0 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_59beb289fa3f41ed93384eedf630d85c,
        "top": "0dp",
        "width": "11%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km90faba1bd2e487f8920bd08a707d8d0.setDefaultUnit(kony.flex.DP);
    var km9de9c78b55d41c7ae5d618ce6487c54 = new kony.ui.Image2({
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
    km90faba1bd2e487f8920bd08a707d8d0.add(km9de9c78b55d41c7ae5d618ce6487c54);
    var kmc0b92a9fa6d4e318795f364604d7faa = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "11%",
        "onClick": AS_FlexContainer_d27c960bd7664f7a9d74a66c914f98bc,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmc0b92a9fa6d4e318795f364604d7faa.setDefaultUnit(kony.flex.DP);
    var km46aa5ae17e64faf909cdacf819099d6 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image0b65c1535a38d40",
        "src": "ic_menu_back.png",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmc0b92a9fa6d4e318795f364604d7faa.add(km46aa5ae17e64faf909cdacf819099d6);
    var km691c67df47a49daba7da59505eb086b = new kony.ui.FlexContainer({
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
    km691c67df47a49daba7da59505eb086b.setDefaultUnit(kony.flex.DP);
    var km859603094eb437abb8a3864e792f1da = new kony.ui.Image2({
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
    km691c67df47a49daba7da59505eb086b.add(km859603094eb437abb8a3864e792f1da);
    var km8e71829c9054b30a4d889e10f7c7191 = new kony.ui.FlexContainer({
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
    km8e71829c9054b30a4d889e10f7c7191.setDefaultUnit(kony.flex.DP);
    var km6057011336d44fdb8c631397fcca706 = new kony.ui.Image2({
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
    km8e71829c9054b30a4d889e10f7c7191.add(km6057011336d44fdb8c631397fcca706);
    var km2dad35a732e4a1581ed2e635a52a6fa = new kony.ui.FlexContainer({
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
    km2dad35a732e4a1581ed2e635a52a6fa.setDefaultUnit(kony.flex.DP);
    km2dad35a732e4a1581ed2e635a52a6fa.add();
    km4e085d74f3f4ad2b3b991dfdfd61821.add(kmb2367c6ae624cfbaf245a76ca7b7fac, km90faba1bd2e487f8920bd08a707d8d0, kmc0b92a9fa6d4e318795f364604d7faa, km691c67df47a49daba7da59505eb086b, km8e71829c9054b30a4d889e10f7c7191, km2dad35a732e4a1581ed2e635a52a6fa);
    MainFlex.add(FlexProductListContent, km4e085d74f3f4ad2b3b991dfdfd61821);
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
        "onClick": AS_FlexContainer_f82be29b862344739061d7063253a87a,
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
        "onClick": AS_FlexContainer_681dc78918054170b0008bf18e595bb7,
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
        "onClick": AS_FlexContainer_85d00a0b27e74c819884a443300b0835,
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
        "init": AS_Form_158685d7c3eb47138542f002231a3793,
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
    ProductDetailImagesScreen.info = {
        "kuid": "247fa1df27d849bfa0b72e8ad86874ac"
    };
};