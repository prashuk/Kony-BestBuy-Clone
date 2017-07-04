//Type your code here
var psku;
var ratingimage;

function Productdetailsreview(sku) {
    psku = sku;
    if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
        initializeMobileFabric();
    } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
        Productdetailsdetailreviewresponse();
    }
}

function Productdetailsdetailreviewresponse() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Fetching Reviews for Product  !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[4];
        var headers = {};
        data = {
            SkuVal: psku,
            ApiKey: apikey
        };
        mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, reviewSuccess, reviewError);
    } else alert("Network unavailable. Please check your network settings. ");
}

function reviewSuccess(detailreviewresponse) {
    reviewarr = [];
    ProductDetailsScreen.Lblnoreviews.isVisible = false;
    if (detailreviewresponse !== null && detailreviewresponse.opstatus === 0) {
        if (detailreviewresponse.ListOfReviews.length > 0) {
            if (detailreviewresponse.Total > 0) {
                ProductDetailsScreen.LblTotalReviews.text = "Total number of reviews are: " + detailreviewresponse.Total;
            } else {
                ProductDetailsScreen.LblTotalReviews.text = "Total number of reviews are: 0";
            }
            for (var i = 0; i < detailreviewresponse.ListOfReviews.length; i++) {
                reviewImage(detailreviewresponse.ListOfReviews[i].Rating);
                reviewobj = {
                    LblComment: detailreviewresponse.ListOfReviews[i].Title,
                    LblSubmittedBy: "Submitted By: " + detailreviewresponse.ListOfReviews[i].Name,
                    ImgStarRating: ratingimage,
                    LblDetailComment: detailreviewresponse.ListOfReviews[i].Comment
                };
                reviewarr.push(reviewobj);
            }
            ProductDetailsScreen.SegmentReview.setData(reviewarr);
            kony.application.dismissLoadingScreen();
        } else {
            kony.application.dismissLoadingScreen();
            ProductDetailsScreen.FlexImageUpArrow.isVisible = false;
            ProductDetailsScreen.Lblnoreviews.isVisible = true;
        }
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + productlistresponse.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Composite Service",
            yesLabel: "OK"
        }, {});
    }
}

function reviewError(error) {
    kony.application.dismissLoadingScreen();
    //alert ("error------"+ JSON.stringify(error) );
    alert(" Failed to fetch bestbuy stores. Please try again. ");
}

function reviewImage(review) {
    var customerview = Math.floor(review);
    if (customerview > 0 && customerview <= 1) {
        ratingimage = "ratings_star_1.png";
    } else if (customerview > 1 && customerview <= 2) {
        ratingimage = "ratings_star_2.png";
    } else if (customerview > 2 && customerview <= 3) {
        ratingimage = "ratings_star_3.png";
    } else if (customerview > 3 && customerview <= 4) {
        ratingimage = "ratings_star_4.png";
    } else if (customerview > 4) {
        ratingimage = "ratings_star_5.png";
    } else {
        ratingimage = "";
    }
}
// functions for Appmenu navigation
function productDetailAppMenuOpen() {
    ProductDetailsScreen.Homeflex.animate(kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {});
    ProductDetailsScreen.Hamburgeropenflex.isVisible = false;
    ProductDetailsScreen.Hamburgercloseflex.isVisible = true;
}

function productDetailAppMenuClose() {
    ProductDetailsScreen.Homeflex.animate(kony.ui.createAnimation({
        "100": {
            "left": "0%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {});
    ProductDetailsScreen.Hamburgeropenflex.isVisible = true;
    ProductDetailsScreen.Hamburgercloseflex.isVisible = false;
}
// Hamburger menu action code end
// Hamburgermenu items clikc actions home,shoppingcart,storelocator
function invokeproductDetialHomePage() {
    DownarrowClick();
    productDetailAppMenuClose();
    catid = "cat00000";
    count = 0;
    getsegmentdata();
    BreadCrumbText = [];
    HomeCategories.Breadcrumlabel.text = kony.i18n.getLocalizedString("Home");
    HomeCategories.Backbuttonflex.isVisible = false;
    HomeCategories.show();
}

function invokeproductDetialStoreLocator() {
    DownarrowClick();
    productDetailAppMenuClose();
    storeArray = [];
    StoreLocator.map.locationData = storeArray;
    StoreLocator.searchtext.text = "";
    StoreLocator.show();
}

function invokeproductDetialShoppingcCartPage() {
    DownarrowClick();
    productDetailAppMenuClose();
    ShoppingCart.show();
}