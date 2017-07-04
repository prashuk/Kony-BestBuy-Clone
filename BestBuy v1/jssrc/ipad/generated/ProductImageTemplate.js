function initializeProductImageTemplate() {
    CopyFlexImage08bd7070a205843 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "170dp",
        "id": "CopyFlexImage08bd7070a205843",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    CopyFlexImage08bd7070a205843.setDefaultUnit(kony.flex.DP);
    var ImgProductSeveral = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "150dp",
        "id": "ImgProductSeveral",
        "isVisible": true,
        "right": "10dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "150dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    CopyFlexImage08bd7070a205843.add(ImgProductSeveral);
}