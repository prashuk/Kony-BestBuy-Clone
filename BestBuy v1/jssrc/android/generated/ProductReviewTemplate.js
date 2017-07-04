function initializeProductReviewTemplate() {
    FlexProductReview = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "FlexProductReview",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ca52b7e1716d43"
    }, {}, {});
    FlexProductReview.setDefaultUnit(kony.flex.DP);
    var LblComment = new kony.ui.Label({
        "id": "LblComment",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel00056bc7282ed48",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "7%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var LblSubmittedBy = new kony.ui.Label({
        "id": "LblSubmittedBy",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0576fdb4165a245",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "24%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var ImgStarRating = new kony.ui.Image2({
        "height": "15%",
        "id": "ImgStarRating",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "ratings_star_3.png",
        "top": "41%",
        "width": "30%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LblDetailComment = new kony.ui.Label({
        "height": "22%",
        "id": "LblDetailComment",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel01a2433bfbe6c4d",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "63%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexProductReview.add(LblComment, LblSubmittedBy, ImgStarRating, LblDetailComment);
}