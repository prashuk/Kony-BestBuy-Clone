function addWidgetsHamburgerScreen() {
    HamburgerScreen.setDefaultUnit(kony.flex.DP);
    var Mainapp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Mainapp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
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
        "skin": "slFbox",
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
        "skin": "slImage",
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
        "skin": "CopyslLabel0d3bcb771031d4b",
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
        "skin": "slFbox",
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
        "skin": "slImage",
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
        "skin": "CopyslLabel00000ad09a3ec44",
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
        "skin": "slFbox",
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
        "skin": "slImage",
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
        "skin": "CopyslLabel0727964354ab94f",
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
        "skin": "CopyslFbox006ae1b90860247",
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
        "skin": "CopyslFbox009459e53ffc14c",
        "top": "22%",
        "zIndex": 1
    }, {}, {});
    Divider2.setDefaultUnit(kony.flex.DP);
    Divider2.add();
    Mainapp.add(HamHomeSection, HamStoresSection, HamCartSection, Divider1, Divider2);
    HamburgerScreen.add(Mainapp);
};

function HamburgerScreenGlobals() {
    HamburgerScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsHamburgerScreen,
        "enabledForIdleTimeout": false,
        "id": "HamburgerScreen",
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
    HamburgerScreen.info = {
        "kuid": "acfb89e1620f47a3b268c6178d0965b1"
    };
};