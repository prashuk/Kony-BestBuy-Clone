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
        "rowSkin": "Copyseg02ff53ee9f0f949",
        "rowTemplate": CopyFlexImage08bd7070a205843,
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
            "CopyFlexImage08bd7070a205843": "CopyFlexImage08bd7070a205843",
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
    var km445f1c2402f4bb7894b726506769559 = new kony.ui.FlexContainer({
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
    km445f1c2402f4bb7894b726506769559.setDefaultUnit(kony.flex.DP);
    var kma99b28e6dd34eb6b8c2d9ae1b008369 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_a334cbaae76f4fcc8b2945d73afc893e,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kma99b28e6dd34eb6b8c2d9ae1b008369.setDefaultUnit(kony.flex.DP);
    var kmc7cc39425c1443eb43d0b305769a90e = new kony.ui.Image2({
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
    kma99b28e6dd34eb6b8c2d9ae1b008369.add(kmc7cc39425c1443eb43d0b305769a90e);
    var km3b0043c16e94e0ba1ddedaacc38de3f = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_32cde0133c674061a085830a5cf955b5,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km3b0043c16e94e0ba1ddedaacc38de3f.setDefaultUnit(kony.flex.DP);
    var km9fa193b734b44c88ed51dd252730967 = new kony.ui.Image2({
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
    km3b0043c16e94e0ba1ddedaacc38de3f.add(km9fa193b734b44c88ed51dd252730967);
    var km6d89b5607304875a3aafd05705d87c5 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "onClick": AS_FlexContainer_e604f2745a7d428a86c36d7e4c51a967,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km6d89b5607304875a3aafd05705d87c5.setDefaultUnit(kony.flex.DP);
    var kmebb4a028cb34fd587feb2ebc3429c3d = new kony.ui.Image2({
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
    km6d89b5607304875a3aafd05705d87c5.add(kmebb4a028cb34fd587feb2ebc3429c3d);
    var km6343b182c84407b8497aba39b518bed = new kony.ui.FlexContainer({
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
    km6343b182c84407b8497aba39b518bed.setDefaultUnit(kony.flex.DP);
    var km6c97705929542ea8f269f8d2f27510b = new kony.ui.Image2({
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
    km6343b182c84407b8497aba39b518bed.add(km6c97705929542ea8f269f8d2f27510b);
    var km9d89a8c05ba4c5e91fa50229964bc0a = new kony.ui.FlexContainer({
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
    km9d89a8c05ba4c5e91fa50229964bc0a.setDefaultUnit(kony.flex.DP);
    var km4201a749c514aa999b088d8a7afb4bb = new kony.ui.Image2({
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
    km9d89a8c05ba4c5e91fa50229964bc0a.add(km4201a749c514aa999b088d8a7afb4bb);
    var kmbfbf1bbda5546819a47b8048db1f345 = new kony.ui.FlexContainer({
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
    kmbfbf1bbda5546819a47b8048db1f345.setDefaultUnit(kony.flex.DP);
    kmbfbf1bbda5546819a47b8048db1f345.add();
    km445f1c2402f4bb7894b726506769559.add(kma99b28e6dd34eb6b8c2d9ae1b008369, km3b0043c16e94e0ba1ddedaacc38de3f, km6d89b5607304875a3aafd05705d87c5, km6343b182c84407b8497aba39b518bed, km9d89a8c05ba4c5e91fa50229964bc0a, kmbfbf1bbda5546819a47b8048db1f345);
    MainFlex.add(FlexProductListContent, km445f1c2402f4bb7894b726506769559);
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
        "onClick": AS_FlexContainer_1251461d06894ab0b778ad2c60b52cbe,
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
        "onClick": AS_FlexContainer_704ce9004b5c40bfae971043b7c205ca,
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
        "onClick": AS_FlexContainer_7c201ca1fccf444c808c8eaf596e2eaa,
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
        "init": AS_Form_d27864c5397a49d8a9ada673b9adfd46,
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
        "kuid": "e015f8fdcb7d4155a36e73cc58bfe3fe"
    };
};