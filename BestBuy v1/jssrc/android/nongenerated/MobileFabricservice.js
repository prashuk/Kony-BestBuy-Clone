var catid = "cat00000";
var apiKey = "sdjvqsgy8dufawzjpgssz6ns";
var homeCtaegoryCount = [];
var anotherHomeCategoryCount = [];
var categoryHoldarray = [];
var BreadCrumbText = [];
var count = 0;
var catidselected;
var flag = 0;
var labelText = "";
mobileFabricConfiguration = {
    appKey: "c66ce42103624c36d3953927a56001c",
    appSecret: "b3935a0916ae7854a28b70c40bebee56",
    serviceURL: "https://100008191.auth.konycloud.com/appconfig",
    integrationServices: [{
        service: "ListOfBestBuyServices",
        operations: ["GetListOfCategories", "GetCustomSearch", "GetListOfProducts", "GetProductInfo", "GetListOfProductReviews", "GetListOfStoreLocations"]
    }],
    konysdkObject: null,
    authClient: null,
    integrationObj: null,
    isKonySDKObjectInitialized: false,
    isMFAuthenticated: false
};

function getCategeoryData() {
    if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
        initializeMobileFabric();
    } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
        invokeCompositeService();
    }
}

function initializeMobileFabric() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Initializing the app !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.konysdkObject = new kony.sdk();
        mobileFabricConfiguration.konysdkObject.init(mobileFabricConfiguration.appKey, mobileFabricConfiguration.appSecret, mobileFabricConfiguration.serviceURL, SuccessResponse, FailureResponse);
    } else alert("Network unavailable. Please check your network settings. ");
}

function SuccessResponse(response) {
    mobileFabricConfiguration.isKonySDKObjectInitialized = true;
    invokeCompositeService();
    kony.application.dismissLoadingScreen();
}

function FailureResponse(error) {
    kony.application.dismissLoadingScreen();
    alert(" Unable to initialize the application. Please try again. ");
}

function invokeCompositeService() {
    kony.application.showLoadingScreen("loadskin", "Loading Products !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
        enableMenuKey: true,
        enableBackKey: true,
        progressIndicatorColor: "ffffff77"
    });
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[0];
        var headers = {};
        data = {
            CatId: catid,
            ApiKey: apiKey
        };
        mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, compositeServiceSuccessCallback, compositeServiceErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function compositeServiceSuccessCallback(compositeResponse) {
    categoryHoldarray = [];
    if (compositeResponse !== null && compositeResponse.opstatus === 0) {
        if (compositeResponse.ListOfCatagories.length > 0) {
            for (var i = 0; i < compositeResponse.ListOfCatagories.length; i++) {
                var catData = {
                    LblProductName: compositeResponse.ListOfCatagories[i].Name,
                    cid: compositeResponse.ListOfCatagories[i].Id,
                    ImgNavigation: "arrow.png"
                };
                categoryHoldarray.push(catData);
            }
            setdataToLabel();
            HomeScreen.SegmentProductList.setData(categoryHoldarray);
            kony.application.dismissLoadingScreen();
        } else {
            if (BreadCrumbText.length > 0) {
                BreadCrumbText.pop();
                setdataToLabel();
            }
            kony.application.dismissLoadingScreen();
            alert("No subcategories/products  found for the selected category");
        }
    } else {
        kony.application.dismissLoadingScreen();
        kony.ui.Alert({
            message: "Service call failed with opstatus " + compositeResponse.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Composite Service",
            yesLabel: "OK"
        }, {});
    }
}

function setdataToLabel() {
    var homeLabelValue = "";
    homeLabelValue = homeLabelValue + kony.i18n.getLocalizedString("Home");
    for (var k = 0; k < BreadCrumbText.length; k++) {
        homeLabelValue = homeLabelValue + " -> " + BreadCrumbText[k];
    }
    HomeScreen.LblBreadcrumb.text = homeLabelValue;
}

function compositeServiceErrorCallback(error) {
    kony.print(" ********** Entering into compositeServiceErrorCallback ********** ");
    kony.print(" ********** Failure in compositeServiceErrorCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Failed to fetch bestbuy stores. Please try again. " + JSON.stringify(error));
    kony.print(" ********** Exiting out of compositeServiceErrorCallback ********** ");
}

function HomeCatClick() {
    catidselected = HomeScreen.SegmentProductList.selectedRowItems[0].cid;
    catid = catidselected;
    switch (count) {
        case 0:
            BreadCrumbText.push(HomeScreen.SegmentProductList.selectedRowItems[0].LblProductName);
            HomeScreen.BaseHeader.FlexBack.isVisible = true;
            homeCtaegoryCount = HomeScreen.SegmentProductList.data;
            getCategeoryData();
            count++;
            break;
        case 1:
            BreadCrumbText.push(HomeScreen.SegmentProductList.selectedRowItems[0].LblProductName);
            HomeScreen.BaseHeader.FlexBack.isVisible = true;
            anotherHomeCategoryCount = HomeScreen.SegmentProductList.data;
            getCategeoryData();
            count++;
            break;
        case 2:
            getPrductList(catidselected);
            ProductListScreen.LblResult.text = "Results for: " + HomeScreen.SegmentProductList.selectedRowItems[0].LblProductName;
            ProductListScreen.show();
            break;
        default:
            if (count > 2) {
                getPrductList(catidselected);
                ProductListScreen.LblResult.text = "Results for: " + HomeScreen.SegmentProductList.selectedRowItems[0].LblProductName;
                ProductListScreen.show();
            }
            break;
    }
}

function backToHomePage() {
    BreadCrumbText.pop();
    setdataToLabel();
    switch (count) {
        case 1:
            HomeScreen.BaseHeader.FlexBack.isVisible = false;
            HomeScreen.SegmentProductList.setData(homeCtaegoryCount);
            count--;
            break;
        case 2:
            HomeScreen.BaseHeader.FlexBack.isVisible = true;
            HomeScreen.SegmentProductList.setData(anotherHomeCategoryCount);
            count--;
            break;
    }
}