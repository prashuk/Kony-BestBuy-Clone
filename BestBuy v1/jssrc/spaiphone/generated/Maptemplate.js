function initializeMaptemplate() {
    FlexContainer0fd7be2e430cb4a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "35%",
        "id": "FlexContainer0fd7be2e430cb4a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0cf6a49070fed40",
        "width": "90%"
    }, {}, {});
    FlexContainer0fd7be2e430cb4a.setDefaultUnit(kony.flex.DP);
    var Image096c48d5fa98947 = new kony.ui.Image2({
        "height": "50dp",
        "id": "Image096c48d5fa98947",
        "isVisible": true,
        "left": "30dp",
        "skin": "slImage",
        "src": "compass.png",
        "top": "25dp",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var MapStorename = new kony.ui.Label({
        "id": "MapStorename",
        "isVisible": true,
        "left": "110dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "33dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Label0f85f737b833740 = new kony.ui.Label({
        "id": "Label0f85f737b833740",
        "isVisible": true,
        "left": "26dp",
        "skin": "slLabel",
        "text": "Address: ",
        "top": "71dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var MapStoreAddress = new kony.ui.Label({
        "id": "MapStoreAddress",
        "isVisible": true,
        "left": "66dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "110dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Mapcityregion = new kony.ui.Label({
        "id": "Mapcityregion",
        "isVisible": true,
        "left": "62dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "133dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var MapPostalcode = new kony.ui.Label({
        "id": "MapPostalcode",
        "isVisible": true,
        "left": "63dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "162dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    FlexContainer0fd7be2e430cb4a.add(Image096c48d5fa98947, MapStorename, Label0f85f737b833740, MapStoreAddress, Mapcityregion, MapPostalcode);
}