function initializeCategoryTemplate() {
    FlexCategory = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "50dp",
        "id": "FlexCategory",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0a5a60e8f33ac48"
    }, {}, {});
    FlexCategory.setDefaultUnit(kony.flex.DP);
    var LblProductName = new kony.ui.Label({
        "height": "100%",
        "id": "LblProductName",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel02a2653213bdb45",
        "text": "Label",
        "top": "0%",
        "width": "82%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var ImgNavigation = new kony.ui.Image2({
        "height": "100%",
        "id": "ImgNavigation",
        "isVisible": true,
        "left": "88%",
        "skin": "slImage",
        "src": "arrow.png",
        "top": "0%",
        "width": "10%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexCategory.add(LblProductName, ImgNavigation);
}