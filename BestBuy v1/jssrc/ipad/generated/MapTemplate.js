function initializeMapTemplate() {
    FlexMap = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "18%",
        "id": "FlexMap",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0cf6a49070fed40",
        "width": "55%"
    }, {}, {});
    FlexMap.setDefaultUnit(kony.flex.DP);
    var ImgCompass = new kony.ui.Image2({
        "height": "50dp",
        "id": "ImgCompass",
        "isVisible": true,
        "left": "10%",
        "skin": "slImage",
        "src": "compass.png",
        "top": "5%",
        "width": "60dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LblMapStoreName = new kony.ui.Label({
        "id": "LblMapStoreName",
        "isVisible": true,
        "left": "32%",
        "skin": "CopyslLabel0c9a4e075ab7045",
        "text": "Label",
        "top": "12%",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var LblAddress = new kony.ui.Label({
        "id": "LblAddress",
        "isVisible": true,
        "left": "10%",
        "skin": "CopyslLabel0829162f4d6ef4f",
        "text": "Address: ",
        "top": "45%",
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
    var LblMapStoreAddress = new kony.ui.Label({
        "id": "LblMapStoreAddress",
        "isVisible": true,
        "left": "20%",
        "skin": "CopyslLabel0d1de337c279b46",
        "text": "Label",
        "top": "58%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var LblMapCityRegion = new kony.ui.Label({
        "id": "LblMapCityRegion",
        "isVisible": true,
        "left": "20%",
        "skin": "CopyslLabel08ef5ec85831c49",
        "text": "Label",
        "top": "67%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var LblMapPostalCode = new kony.ui.Label({
        "id": "LblMapPostalCode",
        "isVisible": true,
        "left": "20%",
        "skin": "CopyslLabel078b8fe8f4d6f4c",
        "text": "Label",
        "top": "78%",
        "width": "70%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexMap.add(ImgCompass, LblMapStoreName, LblAddress, LblMapStoreAddress, LblMapCityRegion, LblMapPostalCode);
}