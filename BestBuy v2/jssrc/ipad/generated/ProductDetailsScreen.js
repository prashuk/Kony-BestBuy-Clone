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
        "onTouchStart": AS_RichText_996cd2e5806643ee95b9fa58c894dbb6,
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
        "height": "12%",
        "id": "ImgRatings",
        "isVisible": true,
        "left": "35%",
        "skin": "slImage",
        "src": "ratings_star_5.png",
        "top": "49%",
        "width": "110dp",
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
        "top": "55%",
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
        "height": "80%",
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
        "height": "100%",
        "id": "SegmentReview",
        "isVisible": true,
        "needPageIndicator": true,
        "pageOffDotImage": "pageoffdot.png",
        "pageOnDotImage": "pageondot.png",
        "retainSelection": false,
        "rowFocusSkin": "seg2Focus",
        "rowSkin": "seg2Normal",
        "rowTemplate": FlexProductReview,
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
            "FlexProductReview": "FlexProductReview",
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
    FlexReview.add(SegmentReview);
    var FlexImageUpArrow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FlexImageUpArrow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_f870b9bcee2b44eda965bd0d6d305528,
        "skin": "slFbox",
        "top": "85%",
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
        "height": "15%",
        "id": "FlexImageDownArrow",
        "isVisible": false,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_8401063700164a819095c9729cb6d2b7,
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
        "height": "15%",
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
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed08c4ce11b03be4c",
        "height": "45%",
        "id": "BtnAddToCartButton",
        "isVisible": true,
        "left": "10%",
        "onClick": AS_Button_660266c2ebc4484dae78409bdbe48a74,
        "skin": "CopyslButtonGlossBlue0dbd6fa26fca34b",
        "text": "Add To Cart",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "showProgressIndicator": true
    });
    var FlexContainer0b87e42b787b849 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "3px",
        "id": "FlexContainer0b87e42b787b849",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "right": "1%",
        "skin": "CopyslFbox0736d6a1a803d4f",
        "top": "0%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0b87e42b787b849.setDefaultUnit(kony.flex.DP);
    FlexContainer0b87e42b787b849.add();
    var FlexContainer0740f7c4240c845 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0%",
        "clipBounds": true,
        "height": "3px",
        "id": "FlexContainer0740f7c4240c845",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "1%",
        "right": "1%",
        "skin": "CopyslFbox0033f2b98c9f344",
        "zIndex": 1
    }, {}, {});
    FlexContainer0740f7c4240c845.setDefaultUnit(kony.flex.DP);
    FlexContainer0740f7c4240c845.add();
    FlexAddToCart.add(BtnAddToCartButton, FlexContainer0b87e42b787b849, FlexContainer0740f7c4240c845);
    FlexProductDetailsContainer.add(FlexProductDetails, FlexProductReviews, FlexAddToCart);
    var km095af094a2b4b2bb305c867b5d653bf = new kony.ui.FlexContainer({
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
    km095af094a2b4b2bb305c867b5d653bf.setDefaultUnit(kony.flex.DP);
    var kmc413644a78b4b3cb234be21d26eefff = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_5787c8a52c074c11adc0a9906db266ea,
        "top": "0%",
        "width": "11%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmc413644a78b4b3cb234be21d26eefff.setDefaultUnit(kony.flex.DP);
    var km439120f4e3d4afa84928a92770c69b8 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image085bdd2f1a30f4e",
        "src": "humburger.png",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmc413644a78b4b3cb234be21d26eefff.add(km439120f4e3d4afa84928a92770c69b8);
    var km158051483d84afb93ef0c6318f10b57 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_175394982dc844b59e252ce9b43e7d3c,
        "top": "0%",
        "width": "11%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km158051483d84afb93ef0c6318f10b57.setDefaultUnit(kony.flex.DP);
    var km309e292b45a48b58f8944f1685d4387 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image0d08b0c074b514f",
        "src": "humburger.png",
        "width": "70%",
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
    km158051483d84afb93ef0c6318f10b57.add(km309e292b45a48b58f8944f1685d4387);
    var kmbe930f343734d188afe709a11aaeab7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "11%",
        "onClick": AS_FlexContainer_f7b5bf6adfe1451e8f7920443979cd09,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmbe930f343734d188afe709a11aaeab7.setDefaultUnit(kony.flex.DP);
    var km3942f23a11c4c28871205e4e31320b9 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image0b65c1535a38d40",
        "src": "ic_menu_back.png",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmbe930f343734d188afe709a11aaeab7.add(km3942f23a11c4c28871205e4e31320b9);
    var kmfe369011b754ad2a868609960d5ba8e = new kony.ui.FlexContainer({
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
    kmfe369011b754ad2a868609960d5ba8e.setDefaultUnit(kony.flex.DP);
    var km2860ca62577492096bfebd25013ebc0 = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image0f64725833a0345",
        "src": "bestbuy.png",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmfe369011b754ad2a868609960d5ba8e.add(km2860ca62577492096bfebd25013ebc0);
    var km5d5139287624614ad89702c92353792 = new kony.ui.FlexContainer({
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
    km5d5139287624614ad89702c92353792.setDefaultUnit(kony.flex.DP);
    var kmee27c8ce19e47d6970d514996e1b42f = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "50%",
        "height": "70%",
        "id": "Image02d2ed35262d249",
        "src": "search.png",
        "width": "70%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km5d5139287624614ad89702c92353792.add(kmee27c8ce19e47d6970d514996e1b42f);
    var km44c011a5d71461abf12307a3594a156 = new kony.ui.FlexContainer({
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
    km44c011a5d71461abf12307a3594a156.setDefaultUnit(kony.flex.DP);
    km44c011a5d71461abf12307a3594a156.add();
    km095af094a2b4b2bb305c867b5d653bf.add(kmc413644a78b4b3cb234be21d26eefff, km158051483d84afb93ef0c6318f10b57, kmbe930f343734d188afe709a11aaeab7, kmfe369011b754ad2a868609960d5ba8e, km5d5139287624614ad89702c92353792, km44c011a5d71461abf12307a3594a156);
    MainFlex.add(FlexProductDetailsContainer, km095af094a2b4b2bb305c867b5d653bf);
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
        "onClick": AS_FlexContainer_fe5ff2b08a10430e823a65e2f1ebf4d2,
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
        "onClick": AS_FlexContainer_f705ae0fc9114523b4d75835bc2caa80,
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
        "onClick": AS_FlexContainer_974969254a8a462f845806dab0ac6e78,
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
        "init": AS_Form_3f104918c8ad4a71ac699ba74a9ac68d,
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
        "kuid": "f7623054472a4c5d8544972dbe2b48ff"
    };
};