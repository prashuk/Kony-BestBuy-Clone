function addWidgetsProductDetailsScreen() {
    ProductDetailsScreen.setDefaultUnit(kony.flex.DP);
    var kmccf145125d24f31b9e2f2399b2b8858 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "isMaster": true,
        "height": "55dp",
        "id": "BaseHeader",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "100%",
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kmccf145125d24f31b9e2f2399b2b8858.setDefaultUnit(kony.flex.DP);
    var km4ecbc1e72a34cab8033f89c5aa94374 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexHamburgerMenu",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "top": "0dp",
        "width": "70dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km4ecbc1e72a34cab8033f89c5aa94374.setDefaultUnit(kony.flex.DP);
    var km4ee7aaf2442444294d2ad87ea5f25f1 = new kony.ui.Image2({
        "bottom": "10dp",
        "id": "Image08a993376487447",
        "left": "10dp",
        "right": "10dp",
        "src": "humburger.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km4ecbc1e72a34cab8033f89c5aa94374.add(km4ee7aaf2442444294d2ad87ea5f25f1);
    var kma164909dcf4453a9959e82da13dd45b = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "100%",
        "id": "FlexLogo",
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "top": "0dp",
        "width": "80dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    kma164909dcf4453a9959e82da13dd45b.setDefaultUnit(kony.flex.DP);
    var kme298e9c4d834ac782199e2753cd4b77 = new kony.ui.Image2({
        "bottom": 10,
        "id": "Image0a17294430bfd46",
        "imageWhileDownloading": "bestbuy.png",
        "left": "10dp",
        "right": "10dp",
        "src": "bestbuy.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kma164909dcf4453a9959e82da13dd45b.add(kme298e9c4d834ac782199e2753cd4b77);
    var km937859fa1474012b0889a1263ccb480 = new kony.ui.FlexContainer({
        "clipBounds": true,
        "height": "100%",
        "id": "FlexSearch",
        "layoutType": kony.flex.FREE_FORM,
        "right": "0dp",
        "top": "0dp",
        "width": "70dp",
        "zIndex": 1,
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "isVisible": true,
        "skin": "slFbox"
    }, {}, {});
    km937859fa1474012b0889a1263ccb480.setDefaultUnit(kony.flex.DP);
    var km627dc24c7be40cabac4db3e93ac42a8 = new kony.ui.Image2({
        "bottom": "10dp",
        "id": "Image0ba7cf53d34c840",
        "left": "10dp",
        "right": "10dp",
        "src": "search.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    km937859fa1474012b0889a1263ccb480.add(km627dc24c7be40cabac4db3e93ac42a8);
    var kmd2ef8b904984b429d115051d5011752 = new kony.ui.FlexScrollContainer({
        "allowHorizontalBounce": false,
        "allowVerticalBounce": true,
        "bounces": true,
        "clipBounds": true,
        "enableScrolling": true,
        "height": "100%",
        "horizontalScrollIndicator": true,
        "id": "FlexBack",
        "layoutType": kony.flex.FREE_FORM,
        "left": "70dp",
        "pagingEnabled": false,
        "scrollDirection": 2,
        "top": "0dp",
        "verticalScrollIndicator": true,
        "width": "70dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slFSbox"
    }, {}, {});
    kmd2ef8b904984b429d115051d5011752.setDefaultUnit(kony.flex.DP);
    var km47c1730c4bb4d519b034e95bad07352 = new kony.ui.Image2({
        "bottom": "10dp",
        "id": "Image037bf8969579349",
        "left": "10dp",
        "right": "10dp",
        "src": "ic_menu_back.png",
        "top": "10dp",
        "zIndex": 1,
        "isVisible": true,
        "skin": "slImage"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    kmd2ef8b904984b429d115051d5011752.add(km47c1730c4bb4d519b034e95bad07352);
    kmccf145125d24f31b9e2f2399b2b8858.add(km4ecbc1e72a34cab8033f89c5aa94374, kma164909dcf4453a9959e82da13dd45b, km937859fa1474012b0889a1263ccb480, kmd2ef8b904984b429d115051d5011752);
    var FlexProductDetailsContainer = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "bottom": "0dp",
        "clipBounds": true,
        "id": "FlexProductDetailsContainer",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "slFbox",
        "top": "60dp",
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
        "top": "2%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
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
        "top": "22%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
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
        "top": "35%",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var LblProductDetails = new kony.ui.Label({
        "bottom": "2%",
        "height": "77dp",
        "id": "LblProductDetails",
        "isVisible": true,
        "left": "10dp",
        "right": "10dp",
        "skin": "CopyslLabel0fd6465f9d88743",
        "text": "Label",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var RtMore = new kony.ui.RichText({
        "height": "36dp",
        "id": "RtMore",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslRichText0e21fc552f8e641",
        "text": "<u>More...</u>",
        "top": "45.11%",
        "width": "100dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var ImgRatings = new kony.ui.Image2({
        "height": "30dp",
        "id": "ImgRatings",
        "isVisible": true,
        "left": "127dp",
        "skin": "slImage",
        "src": "ratings_star_5.png",
        "top": "48%",
        "width": "117dp",
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
        "centerY": "79%",
        "clipBounds": true,
        "height": "40%",
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
        "id": "LblTotalReviews",
        "isVisible": true,
        "left": "143dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "2dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var ImgArrow = new kony.ui.Image2({
        "height": "20dp",
        "id": "ImgArrow",
        "isVisible": true,
        "left": "126dp",
        "skin": "slImage",
        "src": "downarrow.png",
        "top": "36dp",
        "width": "110dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var ProductReview = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "140dp",
        "id": "ProductReview",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "20dp",
        "skin": "slFbox",
        "top": "58dp",
        "width": "89.33%",
        "zIndex": 1
    }, {}, {});
    ProductReview.setDefaultUnit(kony.flex.DP);
    var LblComment2 = new kony.ui.Label({
        "id": "LblComment2",
        "isVisible": true,
        "left": "2dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "98dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var LblComment = new kony.ui.Label({
        "id": "LblComment",
        "isVisible": true,
        "left": "23dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "56dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var LblSubmittedBy = new kony.ui.Label({
        "id": "LblSubmittedBy",
        "isVisible": true,
        "left": "19dp",
        "skin": "slLabel",
        "text": "Label",
        "top": "87dp",
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "renderAsAnchor": false,
        "textCopyable": false
    });
    var ImgStar = new kony.ui.Image2({
        "height": "30dp",
        "id": "ImgStar",
        "isVisible": true,
        "left": "17dp",
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "127dp",
        "width": "253dp",
        "zIndex": 1
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    ProductReview.add(LblComment2, LblComment, LblSubmittedBy, ImgStar);
    FlexProductReviews.add(LblTotalReviews, ImgArrow, ProductReview);
    var FlexAddToCart = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "52%",
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
        "focusSkin": "slButtonGlossRed",
        "height": "40dp",
        "id": "BtnAddToCartButton",
        "isVisible": true,
        "left": "30dp",
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
    ProductDetailsScreen.add(kmccf145125d24f31b9e2f2399b2b8858, FlexProductDetailsContainer);
};

function ProductDetailsScreenGlobals() {
    ProductDetailsScreen = new kony.ui.Form2({
        "addWidgets": addWidgetsProductDetailsScreen,
        "enabledForIdleTimeout": false,
        "id": "ProductDetailsScreen",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "skin": "CopyslForm09515df17ed3143"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_BOTH,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false
    });
    ProductDetailsScreen.info = {
        "kuid": "2cf3d50ba7064b84922b067d733453a1"
    };
};