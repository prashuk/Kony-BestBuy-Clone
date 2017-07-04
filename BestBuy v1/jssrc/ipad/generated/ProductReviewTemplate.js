function initializeProductReviewTemplate() {
    CopyFlexProductReview09f18c4a6b28246 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "CopyFlexProductReview09f18c4a6b28246",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0ca52b7e1716d43"
    }, {}, {});
    CopyFlexProductReview09f18c4a6b28246.setDefaultUnit(kony.flex.DP);
    var LblComment = new kony.ui.Label({
        "id": "LblComment",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel00056bc7282ed48",
        "text": "Label",
        "top": "4%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var LblSubmittedBy = new kony.ui.Label({
        "id": "LblSubmittedBy",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel0576fdb4165a245",
        "text": "Label",
        "top": "21%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var ImgStarRating = new kony.ui.Image2({
        "id": "ImgStarRating",
        "isVisible": true,
        "left": "3%",
        "skin": "slImage",
        "src": "ratings_star_3.png",
        "top": "36%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LblDetailComment = new kony.ui.Label({
        "id": "LblDetailComment",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel01a2433bfbe6c4d",
        "text": "Label",
        "top": "53%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    CopyFlexProductReview09f18c4a6b28246.add(LblComment, LblSubmittedBy, ImgStarRating, LblDetailComment);
}