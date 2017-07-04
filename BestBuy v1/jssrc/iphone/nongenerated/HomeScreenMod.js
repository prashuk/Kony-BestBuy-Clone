//Global variables.
var catid = "cat00000";
var apiKey = "sdjvqsgy8dufawzjpgssz6ns";
var homeCtaegoryCount = [];
var anotherHomeCategoryCount = [];
var categoryHoldarray = [];
var BreadCrumbText = [];
var count = 0;
var selectedCatId;
//Function calls on setting the appKey, appSecret & URl and assinging the operations.
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
//Function calls for getting the data of products.
function getCategeoryData() {
    if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
        initializeMobileFabric();
    } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
        invokeCompositeService();
    }
}
//Function calls for initializing the the Mobile Fabric.
function initializeMobileFabric() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Initializing...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.konysdkObject = new kony.sdk();
        mobileFabricConfiguration.konysdkObject.init(mobileFabricConfiguration.appKey, mobileFabricConfiguration.appSecret, mobileFabricConfiguration.serviceURL, SuccessResponse, FailureResponse);
    } else alert("Network not available. Please check your network settings or try agiain after some time");
}
//Function calls for success response.
function SuccessResponse(response) {
    mobileFabricConfiguration.isKonySDKObjectInitialized = true;
    invokeCompositeService();
    kony.application.dismissLoadingScreen();
}
//Function calls for failed response.
function FailureResponse(error) {
    kony.application.dismissLoadingScreen();
    alert("Failed to initialize the app. Please try again after some time");
}
//Function calls for invokeComposite services.
function invokeCompositeService() {
    kony.application.showLoadingScreen("loadskin", "Fetching products...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
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
    } else alert("Network not available. Please check your network settings or try agiain after some time");
}
//Function calls for compositeService success call back.
function compositeServiceSuccessCallback(compositeResponse) {
    if (compositeResponse !== null && compositeResponse.opstatus === 0) {
        if (compositeResponse.ListOfCatagories.length > 0) {
            categoryHoldarray = [];
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
            alert("Subcategories not found");
            if (count == 1) {
                HomeScreen.BaseHeader.FlexBack.isVisible = false;
                count--;
            } else {
                count--;
            }
        }
    } else {
        kony.application.dismissLoadingScreen();
        alert("Failed ServiceCalls");
        //kony.ui.Alert({ message: "Failed ServiceCalls with opStatus " + compositeResponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Composite Service",yesLabel:"OK"}, {});
    }
}
//Function calls for compositeService error call back.
function compositeServiceErrorCallback(error) {
    kony.application.dismissLoadingScreen();
    alert("Unable to fetch BestBuy Stores");
}
//Function calls on clicking on the row at homeScreen.
function HomeCatClick() {
    selectedCatId = HomeScreen.SegmentProductList.selectedRowItems[0].cid;
    catid = selectedCatId;
    switch (count) {
        case 0:
            BreadCrumbText.push(HomeScreen.SegmentProductList.selectedRowItems[0].LblProductName);
            homeCtaegoryCount = HomeScreen.SegmentProductList.data;
            HomeScreen.BaseHeader.FlexBack.isVisible = true;
            getCategeoryData();
            count++;
            SearchCancelButton();
            break;
        case 1:
            BreadCrumbText.push(HomeScreen.SegmentProductList.selectedRowItems[0].LblProductName);
            anotherHomeCategoryCount = HomeScreen.SegmentProductList.data;
            HomeScreen.BaseHeader.FlexBack.isVisible = true;
            getCategeoryData();
            count++;
            SearchCancelButton();
            break;
        case 2:
            getPrductList(selectedCatId);
            ProductListScreen.LblResult.text = "Results for: " + HomeScreen.SegmentProductList.selectedRowItems[0].LblProductName;
            SearchCancelButton();
            ProductListScreen.show();
            break;
        default:
            if (count > 2) {
                getPrductList(selectedCatId);
                ProductListScreen.LblResult.text = "Results for: " + HomeScreen.SegmentProductList.selectedRowItems[0].LblProductName;
                SearchCancelButton();
                ProductListScreen.show();
                break;
            }
    }
}
//Function calls for setting the breadcrum text.
function setdataToLabel() {
    var homeLabelValue = "";
    homeLabelValue = homeLabelValue + kony.i18n.getLocalizedString("Home");
    for (var k = 0; k < BreadCrumbText.length; k++) {
        homeLabelValue = homeLabelValue + " -> " + BreadCrumbText[k];
    }
    HomeScreen.LblBreadcrumb.text = homeLabelValue;
}
//Function calls on clicking the back button at homeScreen.
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