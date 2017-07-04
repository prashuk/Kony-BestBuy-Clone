function initializeProductListTemplate() {
    FlexProductList = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "20%",
        "id": "FlexProductList",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox05adf34b805994e"
    }, {}, {});
    FlexProductList.setDefaultUnit(kony.flex.DP);
    var ImgProduct = new kony.ui.Image2({
        "centerY": "52%",
        "height": "70%",
        "id": "ImgProduct",
        "isVisible": true,
        "left": "0%",
        "skin": "slImage",
        "src": "appmenuhome.png",
        "top": "0%",
        "width": "20%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var productlistname = new kony.ui.Label({
        "height": "25%",
        "id": "productlistname",
        "isVisible": true,
        "left": "23%",
        "right": "0dp",
        "skin": "CopyslLabel0f72df1c879de49",
        "text": "Label",
        "top": "16%",
        "width": "65%",
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
        "height": "15%",
        "id": "productListPrice",
        "isVisible": true,
        "left": "23%",
        "right": "60dp",
        "skin": "CopyslLabel0fad5236cec4447",
        "text": "Label",
        "top": "43%",
        "width": "65%",
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
        "height": "30dp",
        "id": "ProductListreview",
        "isVisible": true,
        "left": "23%",
        "right": "60dp",
        "skin": "CopyslLabel05d12fdac376f43",
        "text": "Label",
        "top": "60%",
        "width": "65%",
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
    FlexProductList.add(ImgProduct, productlistname, productListPrice, ProductListreview, Image01ac94c57b0364e, Onsale);
}