function addWidgetsProductDetailsScreen() {
    ProductDetailsScreen.setDefaultUnit(kony.flex.DP);
    var MainFlex = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "MainFlex",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox088b9419097704b",
        "top": "0dp",
        "width": "100%",
        "zIndex": 101
    }, {}, {});
    MainFlex.setDefaultUnit(kony.flex.DP);
    var FlexProductDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "id": "FlexProductDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "9%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexProductDetailsContainer.setDefaultUnit(kony.flex.DP);
    var FlexProductDetails = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "40%",
        "id": "FlexProductDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "0%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexProductDetails.setDefaultUnit(kony.flex.DP);
    var ImgProductImage = new kony.ui.Image2({
        "height": "30%",
        "id": "ImgProductImage",
        "isVisible": true,
        "left": "2%",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "2%",
        "width": "30%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var LblProductName = new kony.ui.Label({
        "height": "20%",
        "id": "LblProductName",
        "isVisible": true,
        "left": "35%",
        "right": "10dp",
        "skin": "CopyslLabel033f3de4b356f46",
        "text": "Label",
        "top": "2%",
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
    var LblPrice = new kony.ui.Label({
        "height": "10%",
        "id": "LblPrice",
        "isVisible": true,
        "left": "35%",
        "right": "10dp",
        "skin": "CopyslLabel065bcfc597a5444",
        "text": "Label",
        "top": "22%",
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
    var LblRatings = new kony.ui.Label({
        "height": "10%",
        "id": "LblRatings",
        "isVisible": true,
        "left": "35%",
        "right": "10dp",
        "skin": "CopyslLabel048196803822742",
        "text": "Label",
        "top": "35%",
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
    var LblProductDetails = new kony.ui.Label({
        "bottom": "2%",
        "height": "30%",
        "id": "LblProductDetails",
        "isVisible": true,
        "left": "2%",
        "right": "2%",
        "skin": "CopyslLabel0fd6465f9d88743",
        "text": "Label",
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var RtMore = new kony.ui.RichText({
        "height": "10%",
        "id": "RtMore",
        "isVisible": true,
        "left": "10%",
        "onTouchStart": AS_RichText_b4e1a361ad6d40879b77c8a03d24f5a1,
        "skin": "CopyslRichText0e21fc552f8e641",
        "text": "<u>More...</u>",
        "top": "49%",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    var ImgRatings = new kony.ui.Image2({
        "height": "10%",
        "id": "ImgRatings",
        "isVisible": true,
        "left": "35%",
        "skin": "slImage",
        "src": "ratings_star_5.png",
        "top": "49%",
        "width": "80dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexProductDetails.add(ImgProductImage, LblProductName, LblPrice, LblRatings, LblProductDetails, RtMore, ImgRatings);
    var FlexProductReviews = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "id": "FlexProductReviews",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "48%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexProductReviews.setDefaultUnit(kony.flex.DP);
    var LblTotalReviews = new kony.ui.Label({
        "height": "10%",
        "id": "LblTotalReviews",
        "isVisible": true,
        "left": "3%",
        "skin": "CopyslLabel07492159be68c41",
        "text": "Label",
        "top": "3%",
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
    var FlexReviewMain = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "id": "FlexReviewMain",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "3%",
        "right": "3%",
        "skin": "slFbox",
        "top": "14%",
        "zIndex": 1
    }, {}, {});
    FlexReviewMain.setDefaultUnit(kony.flex.DP);
    var FlexReview = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "87%",
        "id": "FlexReview",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox",
        "top": "100%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexReview.setDefaultUnit(kony.flex.DP);
    var SegmentReview = new kony.ui.SegmentedUI2({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "data": [{
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }, {
            "ImgStarRating": "ratings_star_3.png",
            "LblComment": "Label",
            "LblDetailComment": "Label",
            "LblSubmittedBy": "Label"
        }],
        "groupCells": false,
        "height": "77%",
        "id": "SegmentReview",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": CopyFlexProductReview09f18c4a6b28246,
        "scrollingEvents": {},
        "sectionHeaderSkin": "sliPhoneSegmentHeader",
        "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
        "separatorColor": "64646400",
        "separatorRequired": true,
        "separatorThickness": 1,
        "showScrollbars": false,
        "top": "0%",
        "viewType": constants.SEGUI_VIEW_TYPE_PAGEVIEW,
        "widgetDataMap": {
            "CopyFlexProductReview09f18c4a6b28246": "CopyFlexProductReview09f18c4a6b28246",
            "ImgStarRating": "ImgStarRating",
            "LblComment": "LblComment",
            "LblDetailComment": "LblDetailComment",
            "LblSubmittedBy": "LblSubmittedBy"
        },
        "width": "100%",
        "zIndex": 1
    }, {
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "editStyle": constants.SEGUI_EDITING_STYLE_NONE,
        "enableDictionary": false,
        "indicator": constants.SEGUI_ROW_SELECT,
        "progressIndicatorColor": constants.PROGRESS_INDICATOR_COLOR_WHITE,
        "showProgressIndicator": true
    });
    var PreviousButton = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed02d8a4ee3a64a4c",
        "height": "15%",
        "id": "PreviousButton",
        "isVisible": true,
        "left": "5%",
        "onClick": AS_Button_b41fb1731d70417d98c7232c0d50d8a3,
        "skin": "CopyslButtonGlossBlue094db29e646ae4d",
        "text": "<< Previous",
        "top": "80%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var NextButton = new kony.ui.Button({
        "focusSkin": "CopyslButtonGlossRed0c79a396a3ed648",
        "height": "15%",
        "id": "NextButton",
        "isVisible": true,
        "onClick": AS_Button_8aa653d13f044b56bd66b75fb805f4ec,
        "right": "5%",
        "skin": "CopyslButtonGlossBlue05b4127d2dfba40",
        "text": "Next >>",
        "top": "80%",
        "width": "30%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var Totalpages = new kony.ui.Label({
        "centerX": "50%",
        "id": "Totalpages",
        "isVisible": true,
        "skin": "CopyslLabel0e651ddd01ce44e",
        "text": "Label",
        "top": "85%",
        "width": "25%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexReview.add(SegmentReview, PreviousButton, NextButton, Totalpages);
    var FlexImageUpArrow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "FlexImageUpArrow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_fb8d4429233042a4a3fb2daa2038b189,
        "skin": "slFbox",
        "top": "88%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexImageUpArrow.setDefaultUnit(kony.flex.DP);
    var ImgUpArrow = new kony.ui.Image2({
        "height": "100%",
        "id": "ImgUpArrow",
        "isVisible": true,
        "left": "0dp",
        "right": "0%",
        "skin": "slImage",
        "src": "uparrow.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexImageUpArrow.add(ImgUpArrow);
    var FlexImageDownArrow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "FlexImageDownArrow",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_cac23d60bd89435fb7affa27c41be26d,
        "right": "0%",
        "skin": "slFbox",
        "top": "0%",
        "zIndex": 1
    }, {}, {});
    FlexImageDownArrow.setDefaultUnit(kony.flex.DP);
    var ImgDownArrow = new kony.ui.Image2({
        "bottom": "0dp",
        "centerX": "50%",
        "centerY": "50%",
        "id": "ImgDownArrow",
        "isVisible": true,
        "right": "0dp",
        "skin": "slImage",
        "src": "downarrow.png",
        "top": "0dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexImageDownArrow.add(ImgDownArrow);
    FlexReviewMain.add(FlexReview, FlexImageUpArrow, FlexImageDownArrow);
    var Lblnoreviews = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "10%",
        "id": "Lblnoreviews",
        "isVisible": false,
        "left": "3%",
        "skin": "CopyslLabel07492159be68c41",
        "text": "No Reviews Available",
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false,
        "wrapping": constants.WIDGET_TEXT_WORD_WRAP
    });
    FlexProductReviews.add(LblTotalReviews, FlexReviewMain, Lblnoreviews);
    var FlexAddToCart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "8%",
        "id": "FlexAddToCart",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "40%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexAddToCart.setDefaultUnit(kony.flex.DP);
    var BtnAddToCartButton = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "CopyslButtonGlossRed08c4ce11b03be4c",
        "height": "85%",
        "id": "BtnAddToCartButton",
        "isVisible": true,
        "left": "10%",
        "onClick": AS_Button_6e7bf5b182e340b7b432e275d51c2edc,
        "skin": "CopyslButtonGlossBlue0dbd6fa26fca34b",
        "text": "Add To Cart",
        "top": "0%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var FlexDivider = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "3%",
        "id": "FlexDivider",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "right": "0%",
        "skin": "CopyslFbox020d3e295cd2042",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexDivider.setDefaultUnit(kony.flex.DP);
    FlexDivider.add();
    FlexAddToCart.add(BtnAddToCartButton, FlexDivider);
    FlexProductDetailsContainer.add(FlexProductDetails, FlexProductReviews, FlexAddToCart);
    var km6cf6805bff94c5bbf35d73e9aa97e3c = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "9.50%",
        "id": "BaseHeader",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km6cf6805bff94c5bbf35d73e9aa97e3c.setDefaultUnit(kony.flex.DP);
    var kmd72f20536ee4c979c1cb3ed73e5a602 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_0fc6f48981d143799a9ea70fca07db85,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmd72f20536ee4c979c1cb3ed73e5a602.setDefaultUnit(kony.flex.DP);
    var kmf308a6bf1a648d390d0f454f535d687 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image085bdd2f1a30f4e",
        "src": "humburger.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmd72f20536ee4c979c1cb3ed73e5a602.add(kmf308a6bf1a648d390d0f454f535d687);
    var kme0411fbd3114872934a14418b605377 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_0fa65d513a0a48428532d7d2f5980406,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    kme0411fbd3114872934a14418b605377.setDefaultUnit(kony.flex.DP);
    var kmd29bb14ef824358a7dba58599f1f495 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image0d08b0c074b514f",
        "src": "humburger.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "left": "0dp",
        "skin": "slImage",
        "top": "0dp"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kme0411fbd3114872934a14418b605377.add(kmd29bb14ef824358a7dba58599f1f495);
    var kmdb46e48beae4559a3faf8b54077dffd = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "onClick": AS_FlexContainer_5de3149f6aa74402bf028b3b5145a3f2,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmdb46e48beae4559a3faf8b54077dffd.setDefaultUnit(kony.flex.DP);
    var km6e3f8c534a74c92ae2b168fa5f2188b = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image0b65c1535a38d40",
        "src": "ic_menu_back.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmdb46e48beae4559a3faf8b54077dffd.add(km6e3f8c534a74c92ae2b168fa5f2188b);
    var kmcb5fed78df34182a9941d097f0c2974 = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexLogo",
        "layoutType": kony.flex.FREE_FORM,
        "top": "0%",
        "width": "20%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmcb5fed78df34182a9941d097f0c2974.setDefaultUnit(kony.flex.DP);
    var km65e20e6ee8d43029a7cf132a275d64e = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image0f64725833a0345",
        "src": "bestbuy.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmcb5fed78df34182a9941d097f0c2974.add(km65e20e6ee8d43029a7cf132a275d64e);
    var km5f1b4044bd4444993c2da0d53a232d9 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexSearch",
        "layoutType": kony.flex.FREE_FORM,
        "right": "0%",
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km5f1b4044bd4444993c2da0d53a232d9.setDefaultUnit(kony.flex.DP);
    var kme01c22b452f40118bae458d4edcc5e3 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "90%",
        "id": "Image02d2ed35262d249",
        "src": "search.png",
        "width": "90%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km5f1b4044bd4444993c2da0d53a232d9.add(kme01c22b452f40118bae458d4edcc5e3);
    var km5eb40f324b64814a43ffd08ebfd061e = new kony.ui.FlexContainer({
        "bottom": "0%",
        "clipBounds": true,
        "height": "1.50%",
        "id": "FlexDivider",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "right": "0%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "CopyslFbox0b2747dcc0cde48"
    }, {}, {});
    km5eb40f324b64814a43ffd08ebfd061e.setDefaultUnit(kony.flex.DP);
    km5eb40f324b64814a43ffd08ebfd061e.add();
    km6cf6805bff94c5bbf35d73e9aa97e3c.add(kmd72f20536ee4c979c1cb3ed73e5a602, kme0411fbd3114872934a14418b605377, kmdb46e48beae4559a3faf8b54077dffd, kmcb5fed78df34182a9941d097f0c2974, km5f1b4044bd4444993c2da0d53a232d9, km5eb40f324b64814a43ffd08ebfd061e);
    MainFlex.add(FlexProductDetailsContainer, km6cf6805bff94c5bbf35d73e9aa97e3c);
    var Mainapp = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "100%",
        "id": "Mainapp",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "skin": "slFbox0993707a4aba44c",
        "top": "0%",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    Mainapp.setDefaultUnit(kony.flex.DP);
    var HamHomeSection = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "HamHomeSection",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_81ec40c1bb9242518ac3a74b3d7cf585,
        "skin": "slFbox0993707a4aba44c",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    HamHomeSection.setDefaultUnit(kony.flex.DP);
    var HamHomeImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "HamHomeImg",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage059dcdc283fbe4c",
        "src": "appmenuhome.png",
        "top": "2%",
        "width": "18%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var HamHomeLbl = new kony.ui.Label({
        "centerY": "50%",
        "id": "HamHomeLbl",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel04f1b1de8f87f4f",
        "text": "Home",
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
    HamHomeSection.add(HamHomeImg, HamHomeLbl);
    var HamStoresSection = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "HamStoresSection",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_5626c7640be84f108db2fdcde6dd809a,
        "skin": "slFbox0993707a4aba44c",
        "top": "12%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    HamStoresSection.setDefaultUnit(kony.flex.DP);
    var HamStoresImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "HamStoresImg",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage059dcdc283fbe4c",
        "src": "appmenustore.png",
        "top": "2%",
        "width": "18%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var HamStoresLbl = new kony.ui.Label({
        "centerY": "50%",
        "id": "HamStoresLbl",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel00ef1dd4834674d",
        "text": "Stores",
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
    HamStoresSection.add(HamStoresImg, HamStoresLbl);
    var HamCartSection = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "10%",
        "id": "HamCartSection",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_7ab7b49a9d474b38a7162b4a7a180039,
        "skin": "slFbox0993707a4aba44c",
        "top": "22%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    HamCartSection.setDefaultUnit(kony.flex.DP);
    var HamCartImg = new kony.ui.Image2({
        "centerY": "50%",
        "height": "90%",
        "id": "HamCartImg",
        "isVisible": true,
        "left": "5%",
        "skin": "slImage059dcdc283fbe4c",
        "src": "appmenucart.png",
        "top": "2%",
        "width": "18%",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var HamCartLbl = new kony.ui.Label({
        "centerY": "50%",
        "id": "HamCartLbl",
        "isVisible": true,
        "left": "28%",
        "skin": "CopyslLabel0a5c8bb30969b43",
        "text": "Cart",
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
    HamCartSection.add(HamCartImg, HamCartLbl);
    var Divider1 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2px",
        "id": "Divider1",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox08c969852e0d448",
        "top": "13%",
        "zIndex": 1
    }, {}, {});
    Divider1.setDefaultUnit(kony.flex.DP);
    Divider1.add();
    var Divider2 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "2px",
        "id": "Divider2",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "5%",
        "right": "5%",
        "skin": "CopyslFbox001f7836251f14c",
        "top": "22%",
        "zIndex": 1
    }, {}, {});
    Divider2.setDefaultUnit(kony.flex.DP);
    Divider2.add();
    Mainapp.add(HamHomeSection, HamStoresSection, HamCartSection, Divider1, Divider2);
    ProductDetailsScreen.add(MainFlex, Mainapp);
};

function ProductDetailsScreenGlobals() {
    ProductDetailsScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsProductDetailsScreen,
        "enabledForIdleTimeout": false,
        "id": "ProductDetailsScreen",
        "init": AS_Form_de20b2a57b5b4445aea899c9a4f4ddc6,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm09515df17ed3143"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": "100",
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_CANCEL,
        "needsIndicatorDuringPostShow": false,
        "retainScrollPosition": false,
        "titleBar": false,
        "titleBarSkin": "slTitleBar"
    });
    ProductDetailsScreen.info = {
        "kuid": "8230ea6355bc446eb04fad9d522ed7e5"
    };
};