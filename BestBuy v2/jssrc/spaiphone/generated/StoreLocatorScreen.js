function addWidgetsStoreLocatorScreen() {
    StoreLocatorScreen.setDefaultUnit(kony.flex.DP);
    var km7e4c14844bd4e019940438d814bfe27 = new kony.ui.FlexContainer({
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
    km7e4c14844bd4e019940438d814bfe27.setDefaultUnit(kony.flex.DP);
    var km059bf417c914b76b4eb9ec595171379 = new kony.ui.FlexContainer({
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
    km059bf417c914b76b4eb9ec595171379.setDefaultUnit(kony.flex.DP);
    var km6f81a8de6f6455489e15851ed58d0f8 = new kony.ui.Image2({
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
    km059bf417c914b76b4eb9ec595171379.add(km6f81a8de6f6455489e15851ed58d0f8);
    var kme3cb65d115f4c26a3a94b7db4be9c49 = new kony.ui.FlexContainer({
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
    kme3cb65d115f4c26a3a94b7db4be9c49.setDefaultUnit(kony.flex.DP);
    var km60b96edb6ee4a0192a8d51837f4673e = new kony.ui.Image2({
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
    kme3cb65d115f4c26a3a94b7db4be9c49.add(km60b96edb6ee4a0192a8d51837f4673e);
    var km789d1be76fd4bfd8b2946553e46fe36 = new kony.ui.FlexContainer({
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
    km789d1be76fd4bfd8b2946553e46fe36.setDefaultUnit(kony.flex.DP);
    var kmb75e10eaf81443984c91a7cae515aa2 = new kony.ui.Image2({
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
    km789d1be76fd4bfd8b2946553e46fe36.add(kmb75e10eaf81443984c91a7cae515aa2);
    var kme1ff77d2e2b490986093b13e7bae564 = new kony.ui.FlexScrollContainer({
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
    kme1ff77d2e2b490986093b13e7bae564.setDefaultUnit(kony.flex.DP);
    var kmad48e140e574b15837d2ae97889c999 = new kony.ui.Image2({
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
    kme1ff77d2e2b490986093b13e7bae564.add(kmad48e140e574b15837d2ae97889c999);
    km7e4c14844bd4e019940438d814bfe27.add(km059bf417c914b76b4eb9ec595171379, kme3cb65d115f4c26a3a94b7db4be9c49, km789d1be76fd4bfd8b2946553e46fe36, kme1ff77d2e2b490986093b13e7bae564);
    var FlexHomeContent = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "id": "FlexHomeContent",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": 0,
        "skin": "slFbox",
        "top": "56dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexHomeContent.setDefaultUnit(kony.flex.DP);
    var SearchTextfield = new kony.ui.TextBox2({
        "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
        "height": "40dp",
        "id": "SearchTextfield",
        "isVisible": true,
        "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
        "left": "2%",
        "placeholder": "Enter City...",
        "secureTextEntry": false,
        "skin": "slTextBox",
        "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
        "top": "0%",
        "width": "75%",
        "zIndex": 1
    }, {
        "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [3, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "autoComplete": false,
        "autoCorrect": false
    });
    var MapScreen = new kony.ui.Map({
        "bottom": "0%",
        "calloutTemplate": FlexContainer0fd7be2e430cb4a,
        "calloutWidth": 80,
        "defaultPinImage": "pinb.png",
        "id": "MapScreen",
        "isVisible": true,
        "left": "0%",
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "top": "50dp",
        "widgetDataMapForCallout": {
            "FlexContainer0fd7be2e430cb4a": "FlexContainer0fd7be2e430cb4a",
            "Image096c48d5fa98947": "Image096c48d5fa98947",
            "Label0f85f737b833740": "Label0f85f737b833740",
            "MapPostalcode": "MapPostalcode",
            "MapStoreAddress": "MapStoreAddress",
            "MapStorename": "MapStorename",
            "Mapcityregion": "Mapcityregion"
        },
        "width": "100%",
        "zIndex": 1
    }, {}, {
        "mapSource": constants.MAP_SOURCE_NON_NATIVE,
        "mode": constants.MAP_VIEW_MODE_NORMAL
    });
    var SerchButton = new kony.ui.Button({
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "SerchButton",
        "isVisible": true,
        "onClick": AS_Button_c7e971779b6542aea100c5d88c0f80f1,
        "right": "2%",
        "skin": "CopyslButtonGlossBlue04f25468c045746",
        "text": "Search",
        "top": "0dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexHomeContent.add(SearchTextfield, MapScreen, SerchButton);
    StoreLocatorScreen.add(km7e4c14844bd4e019940438d814bfe27, FlexHomeContent);
};

function StoreLocatorScreenGlobals() {
    StoreLocatorScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsStoreLocatorScreen,
        "enabledForIdleTimeout": false,
        "id": "StoreLocatorScreen",
        "init": AS_Form_369f910cd3cd49aab0aeec958275b094,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm09515df17ed3143"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    StoreLocatorScreen.info = {
        "kuid": "2cc2aeb44f914aa6bb649ea545cd53ad"
    };
};