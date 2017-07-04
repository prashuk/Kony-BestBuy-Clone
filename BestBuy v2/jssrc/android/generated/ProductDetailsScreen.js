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
        "bottom": "2%",
        "clipBounds": true,
        "height": "40%",
        "id": "FlexProductDetails",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "0dp",
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var LblPrice = new kony.ui.Label({
        "height": "10%",
        "id": "LblPrice",
        "isVisible": true,
        "left": "35%",
        "right": "10dp",
        "skin": "CopyslLabel065bcfc597a5444",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "22%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var LblRatings = new kony.ui.Label({
        "height": "10%",
        "id": "LblRatings",
        "isVisible": true,
        "left": "35%",
        "right": "10dp",
        "skin": "CopyslLabel048196803822742",
        "text": "Label",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "35%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "96%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var RtMore = new kony.ui.RichText({
        "height": "10%",
        "id": "RtMore",
        "isVisible": true,
        "left": "10%",
        "onTouchStart": AS_RichText_54303e7293d74705b3ae4ad7a2846bbc,
        "skin": "CopyslRichText0e21fc552f8e641",
        "text": "<u>More...</u>",
        "top": "49%",
        "width": "15%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
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
        "bottom": "0dp",
        "clipBounds": true,
        "height": "45%",
        "id": "FlexProductReviews",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
    }, {});
    FlexReview.add(SegmentReview);
    var FlexImageUpArrow = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "15%",
        "id": "FlexImageUpArrow",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_00ecfdacceb04432a5cc78cf202b6ba8,
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
        "onClick": AS_FlexContainer_f83ee18808f149bc877094f825062a85,
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "3%",
        "width": "90%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexProductReviews.add(LblTotalReviews, FlexReviewMain, Lblnoreviews);
    var FlexAddToCart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "47%",
        "clipBounds": true,
        "height": "15%",
        "id": "FlexAddToCart",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "45%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexAddToCart.setDefaultUnit(kony.flex.DP);
    var BtnAddToCartButton = new kony.ui.Button({
        "centerX": "50%",
        "centerY": "50%",
        "focusSkin": "CopyslButtonGlossRed08c4ce11b03be4c",
        "height": "40dp",
        "id": "BtnAddToCartButton",
        "isVisible": true,
        "left": "30dp",
        "onClick": AS_Button_740dbaada4134bd48aa734d57b713650,
        "right": "30dp",
        "skin": "CopyslButtonGlossBlue0dbd6fa26fca34b",
        "text": "Add To Cart",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    FlexAddToCart.add(BtnAddToCartButton);
    FlexProductDetailsContainer.add(FlexProductDetails, FlexProductReviews, FlexAddToCart);
    var km5ae91987fd44e74a5b223e68632bf94 = new kony.ui.FlexContainer({
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
    km5ae91987fd44e74a5b223e68632bf94.setDefaultUnit(kony.flex.DP);
    var km1a2d6380ec148f0b432d173dfe9b385 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuOpen",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "onClick": AS_FlexContainer_152fed30c90049068577740c3969ca82,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km1a2d6380ec148f0b432d173dfe9b385.setDefaultUnit(kony.flex.DP);
    var kmccdd02dd83d47c4bc9201ddbb61bc9b = new kony.ui.Image2({
        "height": "100%",
        "id": "Image085bdd2f1a30f4e",
        "left": "0dp",
        "src": "humburger.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km1a2d6380ec148f0b432d173dfe9b385.add(kmccdd02dd83d47c4bc9201ddbb61bc9b);
    var km0789579e18c42deb96a2d5456b97243 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "HamburgerMenuClose",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "onClick": AS_FlexContainer_b615109557644422bdb196f2a77cfa56,
        "top": "0dp",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": false,
        "skin": "slFbox"
    }, {}, {});
    km0789579e18c42deb96a2d5456b97243.setDefaultUnit(kony.flex.DP);
    var km95a64c77b4741698f01c908f8d722dd = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0d08b0c074b514f",
        "left": "0dp",
        "src": "humburger.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km0789579e18c42deb96a2d5456b97243.add(km95a64c77b4741698f01c908f8d722dd);
    var km0f5e80423324e64b238b532dee843e7 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "13%",
        "onClick": AS_FlexContainer_c7a8e002a7254b129914e3fe05304cfb,
        "top": "0%",
        "width": "13%",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km0f5e80423324e64b238b532dee843e7.setDefaultUnit(kony.flex.DP);
    var kmd8a507fe9994c5580765869c3a7820d = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0b65c1535a38d40",
        "left": "0dp",
        "src": "ic_menu_back.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km0f5e80423324e64b238b532dee843e7.add(kmd8a507fe9994c5580765869c3a7820d);
    var km30d61d390814bfe812e5f48e4210297 = new kony.ui.FlexContainer({
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
    km30d61d390814bfe812e5f48e4210297.setDefaultUnit(kony.flex.DP);
    var km9c8a0a4f6494e5aad7bb520b8e3bdfa = new kony.ui.Image2({
        "height": "100%",
        "id": "Image0f64725833a0345",
        "left": "0dp",
        "src": "bestbuy.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km30d61d390814bfe812e5f48e4210297.add(km9c8a0a4f6494e5aad7bb520b8e3bdfa);
    var km69bcd456d934167844727c7566a3818 = new kony.ui.FlexContainer({
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
    km69bcd456d934167844727c7566a3818.setDefaultUnit(kony.flex.DP);
    var kma6b0ead1f4940cb88bb07a398b76b9d = new kony.ui.Image2({
        "height": "100%",
        "id": "Image02d2ed35262d249",
        "left": "0dp",
        "src": "search.png",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km69bcd456d934167844727c7566a3818.add(kma6b0ead1f4940cb88bb07a398b76b9d);
    km5ae91987fd44e74a5b223e68632bf94.add(km1a2d6380ec148f0b432d173dfe9b385, km0789579e18c42deb96a2d5456b97243, km0f5e80423324e64b238b532dee843e7, km30d61d390814bfe812e5f48e4210297, km69bcd456d934167844727c7566a3818);
    MainFlex.add(FlexProductDetailsContainer, km5ae91987fd44e74a5b223e68632bf94);
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
        "onClick": AS_FlexContainer_4cab8504cc7c4c13bf56196d9259ae2d,
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "onClick": AS_FlexContainer_52fb0f9bb0264ee5b374701eeb9df268,
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "onClick": AS_FlexContainer_4b1abe42913040079765ac4499383ea0,
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
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
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
        "init": AS_Form_2fcf873769d14ede97e2e38c0775a371,
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm09515df17ed3143"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    ProductDetailsScreen.info = {
        "kuid": "2cf3d50ba7064b84922b067d733453a1"
    };
};