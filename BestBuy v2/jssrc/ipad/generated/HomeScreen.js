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
        "left": "5%",
        "maxNumberOfLines": 3,
        "right": "3%",
        "skin": "CopyslLabel0addf39ad6fb245",
        "text": "Home",
        "top": "0%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
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
            "ImgNavigation": "arrow.png",
            "LblProductName": "Label"
        }],
        "groupCells": false,
        "height": "100%",
        "id": "SegmentProductList",
        "isVisible": true,
        "left": "0dp",
        "needPageIndicator": true,
        "onRowClick": AS_Segment_a4dedd11137d4a22859fb3a0585a9c5f,
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
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_NONE,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    FlexSegmentProductList.add(SegmentProductList);
    FlexHomeContent.add(LblBreadcrumb, FlexSegmentProductList);
    var km299d2155c4d48bfb3f7bbf11ca382ce = new kony.ui.FlexContainer({
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
    km299d2155c4d48bfb3f7bbf11ca382ce.setDefaultUnit(kony.flex.DP);
    var km63f343363c14c2db8b1f7e7bddb0305 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_72c2a181d60d41bb87d75cf93db57fbf,
        "top": "0%",
        "width": "11%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km63f343363c14c2db8b1f7e7bddb0305.setDefaultUnit(kony.flex.DP);
    var km16ff38025314fe78ed1737b737e3c79 = new kony.ui.Image2({
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
    km63f343363c14c2db8b1f7e7bddb0305.add(km16ff38025314fe78ed1737b737e3c79);
    var km505706aa4e946aca5264fb8b9314a86 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_c137e13eb099414cba8bc2adde186da8,
        "top": "0dp",
        "width": "11%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km505706aa4e946aca5264fb8b9314a86.setDefaultUnit(kony.flex.DP);
    var km61fe381d8fa441bb298962c09907caa = new kony.ui.Image2({
        "height": "70%",
        "id": "Image0d08b0c074b514f",
        "left": "0dp",
        "src": "humburger.png",
        "top": "0dp",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km505706aa4e946aca5264fb8b9314a86.add(km61fe381d8fa441bb298962c09907caa);
    var km528f0f27f284c1cb4243906e86b74a5 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "11%",
        "onClick": AS_FlexContainer_c2b7b29279e446c6bb2d0b3788809729,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km528f0f27f284c1cb4243906e86b74a5.setDefaultUnit(kony.flex.DP);
    var kma6d5516a0c54702bcb41425737d076c = new kony.ui.Image2({
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
    km528f0f27f284c1cb4243906e86b74a5.add(kma6d5516a0c54702bcb41425737d076c);
    var km34c0c29a6cf420592b8d5b11c4e39a5 = new kony.ui.FlexContainer({
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
    km34c0c29a6cf420592b8d5b11c4e39a5.setDefaultUnit(kony.flex.DP);
    var km4a946d339fe4348ac09c5771781962a = new kony.ui.Image2({
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
    km34c0c29a6cf420592b8d5b11c4e39a5.add(km4a946d339fe4348ac09c5771781962a);
    var km5b8d0cdf864483b8057b93f9ad8563d = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexSearch",
        "layoutType": kony.flex.FREE_FORM,
        "onClick": AS_FlexContainer_2a0c14f416604274af6aa360b8f9dab7,
        "right": "0%",
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km5b8d0cdf864483b8057b93f9ad8563d.setDefaultUnit(kony.flex.DP);
    var km30496c5cc784b99bb1501850aab159f = new kony.ui.Image2({
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
    km5b8d0cdf864483b8057b93f9ad8563d.add(km30496c5cc784b99bb1501850aab159f);
    var km21087398ef04a7983d1b6be54e60841 = new kony.ui.FlexContainer({
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
    km21087398ef04a7983d1b6be54e60841.setDefaultUnit(kony.flex.DP);
    km21087398ef04a7983d1b6be54e60841.add();
    km299d2155c4d48bfb3f7bbf11ca382ce.add(km63f343363c14c2db8b1f7e7bddb0305, km505706aa4e946aca5264fb8b9314a86, km528f0f27f284c1cb4243906e86b74a5, km34c0c29a6cf420592b8d5b11c4e39a5, km5b8d0cdf864483b8057b93f9ad8563d, km21087398ef04a7983d1b6be54e60841);
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
        "onDone": AS_TextField_2fe05960cc4d43b0a41a1ec521873daa,
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
        "autoCorrect": false,
        "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
        "placeholderSkin": "CopyslTextBox07ebadb4eacad46",
        "showClearButton": true,
        "showCloseButton": true,
        "showProgressIndicator": true,
        "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
    });
    var LblFilterBy = new kony.ui.Label({
        "id": "LblFilterBy",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel099cd005aaa754f",
        "text": "Filter By:",
        "top": "37%",
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
        "groupCells": false,
        "placeholder": "<Set  a value>",
        "viewConfig": {
            "toggleViewConfig": {
                "viewStyle": constants.LISTBOX_TOGGLE_VIEW_STYLE_PLAIN
            }
        },
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    var BtnCancel = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed06db5baa099b445",
        "height": "20%",
        "id": "BtnCancel",
        "isVisible": true,
        "onClick": AS_Button_8e68d59407c44ea0af046f88a0454b30,
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
    }, {
        "showProgressIndicator": true
    });
    FlexCustomSearchArea.add(CustomSearchTextField, LblFilterBy, ListBoxCustomSearch, BtnCancel);
    MainFlex.add(FlexHomeContent, km299d2155c4d48bfb3f7bbf11ca382ce, FlexCustomSearchArea);
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
        "onClick": AS_FlexContainer_4bdba7cb48944380a8e0af536540ba5a,
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
        "onClick": AS_FlexContainer_28371f74125145d0af2b4ff7afa1356e,
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
        "onClick": AS_FlexContainer_f162800bbea64a7c9123444a76901b3f,
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
        "init": AS_Form_36d398974a384d809e6c25dd758493d0,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_77599e6551ed4e7db5c7039a108d344f,
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
    HomeScreen.info = {
        "kuid": "9a11969e60114778b9180d8aade2381b"
    };
};