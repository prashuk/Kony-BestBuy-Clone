function addWidgetsHomeScreen() {
    HomeScreen.setDefaultUnit(kony.flex.DP);
    var MainFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MainFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox01db7b642b2b34d",
        "top": "0dp",
        "width": "100%",
        "zIndex": 101
    }, {}, {});
    MainFlex.setDefaultUnit(kony.flex.DP);
    var FlexHomeContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
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
        "left": "3%",
        "maxNumberOfLines": 3,
        "right": "3%",
        "skin": "CopyslLabel0addf39ad6fb245",
        "text": "Home",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var FlexSegmentProductList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "2%",
        "clipBounds": true,
        "id": "FlexSegmentProductList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "skin": "slFbox",
        "top": "9%",
        "width": "94%",
        "zIndex": 1
    }, {}, {});
    FlexSegmentProductList.setDefaultUnit(kony.flex.DP);
    var SegmentProductList = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "ImgNavigation": "",
            "LblProductName": ""
        }],
        "groupCells": false,
        "height": "100%",
        "id": "SegmentProductList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_f87c0533979f420387b28caaefb13e65,
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
    var km72ea42d2b86412fbbe7fbf2d2a0101c = new kony.ui.FlexContainer({
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
    km72ea42d2b86412fbbe7fbf2d2a0101c.setDefaultUnit(kony.flex.DP);
    var kmefd2d9a3c514968a4ac21b280ad76eb = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_87cb08de5bcd4a15bcde4d3473198f00,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmefd2d9a3c514968a4ac21b280ad76eb.setDefaultUnit(kony.flex.DP);
    var km515abf0de884cacbbe3d64abddffbe5 = new kony.ui.Image2({
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
    kmefd2d9a3c514968a4ac21b280ad76eb.add(km515abf0de884cacbbe3d64abddffbe5);
    var kmd4ce7aee1e0478d8b2f997c9594de6b = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_0f4b431423b4444a8626c9abe848f23b,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    kmd4ce7aee1e0478d8b2f997c9594de6b.setDefaultUnit(kony.flex.DP);
    var km5f00d1e68d44614ab8d95fd2d6a9798 = new kony.ui.Image2({
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
    kmd4ce7aee1e0478d8b2f997c9594de6b.add(km5f00d1e68d44614ab8d95fd2d6a9798);
    var km13d11ff01cd4c25884f40180dc51763 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "onClick": AS_FlexContainer_2470f5e5364d49249cb9f7a9e3baeffe,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km13d11ff01cd4c25884f40180dc51763.setDefaultUnit(kony.flex.DP);
    var kme03fbd4dd0a4977b85412bb15b2815e = new kony.ui.Image2({
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
    km13d11ff01cd4c25884f40180dc51763.add(kme03fbd4dd0a4977b85412bb15b2815e);
    var km9b0000741ac42d68f0c293066520da0 = new kony.ui.FlexContainer({
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
    km9b0000741ac42d68f0c293066520da0.setDefaultUnit(kony.flex.DP);
    var km45efd12b207462ea5a3c90d201d460f = new kony.ui.Image2({
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
    km9b0000741ac42d68f0c293066520da0.add(km45efd12b207462ea5a3c90d201d460f);
    var km4060af632cb495f97937d8a5effd40a = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexSearch",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_c54058351b754e07b4de979a23560099,
        "right": "0%",
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km4060af632cb495f97937d8a5effd40a.setDefaultUnit(kony.flex.DP);
    var kmf69cf7538f640b6bbb31ac32a5caa10 = new kony.ui.Image2({
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
    km4060af632cb495f97937d8a5effd40a.add(kmf69cf7538f640b6bbb31ac32a5caa10);
    km72ea42d2b86412fbbe7fbf2d2a0101c.add(kmefd2d9a3c514968a4ac21b280ad76eb, kmd4ce7aee1e0478d8b2f997c9594de6b, km13d11ff01cd4c25884f40180dc51763, km9b0000741ac42d68f0c293066520da0, km4060af632cb495f97937d8a5effd40a);
    var FlexCustomSearchArea = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "30%",
        "id": "FlexCustomSearchArea",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "100%",
        "skin": "CopyslFbox058ad4a24b99a42",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexCustomSearchArea.setDefaultUnit(kony.flex.DP);
    var CustomSearchTextField = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "20%",
        "id": "CustomSearchTextField",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "3%",
        "onDone": AS_TextField_614166f2044e46ad8af9f7232daae4f4,
        "placeholder": kony.i18n.getLocalizedString("Search"),
        "secureTextEntry": false,
        "skin": "CopyslTextBox0d27413ccb2ca46",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "3%",
        "width": "60%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoFilter": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
        "placeholderSkin": "CopyslTextBox07ebadb4eacad46",
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var LblFilterBy = new kony.ui.Label({
        "id": "LblFilterBy",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel099cd005aaa754f",
        "text": "Filter By:",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "37%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ListBoxCustomSearch = new kony.ui.ListBox({
        "height": "30%",
        "id": "ListBoxCustomSearch",
        "isVisible": true,
        "left": "2%",
        "masterData": [
            ["none", "<Select a value> "],
            ["regularPrice<10", "Cheap"],
            ["regularPrice>10&regularPrice<100", "Mid Price"],
            ["regularPrice>100", "Expensive"]
        ],
        "right": "2%",
        "selectedKey": "none",
        "selectedKeyValue": ["none", "<Select a value> "],
        "skin": "slListBox",
        "top": "53%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "<Set  a value>",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var BtnCancel = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed06db5baa099b445",
        "height": "20%",
        "id": "BtnCancel",
        "isVisible": true,
        "onClick": AS_Button_93c8d0494a3146a48a0334318fcc9cd8,
        "right": "3%",
        "skin": "CopyslButtonGlossBlue041456b31538f4e",
        "text": "Cancel",
        "top": "3%",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexCustomSearchArea.add(CustomSearchTextField, LblFilterBy, ListBoxCustomSearch, BtnCancel);
    MainFlex.add(FlexHomeContent, km72ea42d2b86412fbbe7fbf2d2a0101c, FlexCustomSearchArea);
    var Mainapp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Mainapp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0f74694e0ee8a43",
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
        "onClick": AS_FlexContainer_277e7501b9df430a8a907f0178e3b138,
        "skin": "slFbox0f74694e0ee8a43",
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
        "skin": "slImage06def9d92015f45",
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
        "skin": "CopyslLabel0918a31428e614d",
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
        "onClick": AS_FlexContainer_28572f53a6a04723a75e6316324a52b6,
        "skin": "slFbox0f74694e0ee8a43",
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
        "skin": "slImage06def9d92015f45",
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
        "skin": "CopyslLabel091a64b6dcbb844",
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
        "onClick": AS_FlexContainer_ea7c812896ff4e7bba5ee19c680712bb,
        "skin": "slFbox0f74694e0ee8a43",
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
        "skin": "slImage06def9d92015f45",
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
        "skin": "CopyslLabel006308ba6bccf45",
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
        "skin": "CopyslFbox0638464b95a0d45",
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
        "skin": "CopyslFbox04c766613996d4f",
        "top": "22%",
        "zIndex": 1
    }, {}, {});
    Divider2.setDefaultUnit(kony.flex.DP);
    Divider2.add();
    Mainapp.add(HamHomeSection, HamStoresSection, HamCartSection, Divider1, Divider2);
    HomeScreen.add(MainFlex, Mainapp);
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
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    HomeScreen.info = {
        "kuid": "c29094bae11a44feb27a5c67c71055a9"
    };
};