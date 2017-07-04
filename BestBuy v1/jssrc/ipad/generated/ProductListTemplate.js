function initializeProductListTemplate() {
    CopyFlexProductList004dc5e370f834a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "150dp",
        "id": "CopyFlexProductList004dc5e370f834a",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox05adf34b805994e"
    }, {}, {});
    CopyFlexProductList004dc5e370f834a.setDefaultUnit(kony.flex.DP);
    var ImgProduct = new kony.ui.Image2({
        "centerY": "55%",
        "height": "70%",
        "id": "ImgProduct",
        "isVisible": true,
        "left": "1%",
        "skin": "slImage",
        "src": "appmenuhome.png",
        "width": "33%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var productlistname = new kony.ui.Label({
        "height": "35%",
        "id": "productlistname",
        "isVisible": true,
        "left": "35%",
        "right": "10%",
        "skin": "CopyslLabel0f72df1c879de49",
        "text": "Label",
        "top": "13%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var productListPrice = new kony.ui.Label({
        "height": "22%",
        "id": "productListPrice",
        "isVisible": true,
        "left": "35%",
        "right": "10%",
        "skin": "CopyslLabel0fad5236cec4447",
        "text": "Label",
        "top": "45%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var ProductListreview = new kony.ui.Label({
        "height": "22%",
        "id": "ProductListreview",
        "isVisible": true,
        "left": "35%",
        "right": "10%",
        "skin": "CopyslLabel05d12fdac376f43",
        "text": "Label",
        "top": "68%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var Image01ac94c57b0364e = new kony.ui.Image2({
        "centerY": "50%",
        "height": "50dp",
        "id": "Image01ac94c57b0364e",
        "isVisible": true,
        "right": "0dp",
        "skin": "slImage",
        "src": "arrow.png",
        "width": "50dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var Onsale = new kony.ui.Label({
        "height": "10%",
        "id": "Onsale",
        "isVisible": true,
        "left": "0dp",
        "skin": "CopyslLabel0fbcb9be674db40",
        "text": "!!! ON SALE !!!",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexProductList004dc5e370f834a.add(ImgProduct, productlistname, productListPrice, ProductListreview, Image01ac94c57b0364e, Onsale);
}