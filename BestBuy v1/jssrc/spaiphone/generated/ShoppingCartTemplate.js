function initializeShoppingCartTemplate() {
    FlexShoppingCart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "80dp",
        "id": "FlexShoppingCart",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "slFbox"
    }, {}, {});
    FlexShoppingCart.setDefaultUnit(kony.flex.DP);
    var Label0c3d439fd2f7944 = new kony.ui.Label({
        "centerY": "50%",
        "height": "90%",
        "id": "Label0c3d439fd2f7944",
        "isVisible": true,
        "left": "2%",
        "skin": "CopyslLabel0e6fc1d4849bc49",
        "text": "Label",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Label05746a4fa46ff40 = new kony.ui.Label({
        "centerY": "50%",
        "height": "90%",
        "id": "Label05746a4fa46ff40",
        "isVisible": true,
        "left": "63%",
        "skin": "CopyslLabel04297bceffce145",
        "text": "Label",
        "top": "13dp",
        "width": "20%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var Image04d235f31c25645 = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50dp",
        "id": "Image04d235f31c25645",
        "isVisible": true,
        "right": "10dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexShoppingCart.add(Label0c3d439fd2f7944, Label05746a4fa46ff40, Image04d235f31c25645);
}