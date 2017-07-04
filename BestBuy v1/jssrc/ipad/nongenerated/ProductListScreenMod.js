//Global variables
var productId;
var apikey = "sdjvqsgy8dufawzjpgssz6ns";
var pagesize = 20;
var anyObject;
var avgReview = 0;
//Function calls for getting the data of productsList as success and setting all the text labels.
function getProductListDataSuccessCallback(Productlistresponse) {
    HomeScreen.BaseHeader.FlexBack.isVisible = true;
    if (Productlistresponse !== null && Productlistresponse.opstatus === 0) {
        dataArray = [];
        for (var i = 0; i < Productlistresponse.ListOfProducts.length; i++) {
            if (Productlistresponse.ListOfProducts[i].AverageReview > 0.0) {
                avgReview = "Average user rating: " + Productlistresponse.ListOfProducts[i].AverageReview;
            } else {
                avgReview = "No reviews";
            }
            if (Productlistresponse.ListOfProducts[i].isOnSale === true) {
                anyObject = {
                    productlistname: Productlistresponse.ListOfProducts[i].Name,
                    id: Productlistresponse.ListOfProducts[i].Sku,
                    ProductListreview: avgReview,
                    ImgProduct: Productlistresponse.ListOfProducts[i].Image,
                    productListPrice: {
                        text: "OnSale : $ " + Productlistresponse.ListOfProducts[i].SalesPrice,
                        skin: "red"
                    },
                    Onsale: {
                        isVisible: true
                    }
                };
                dataArray.push(anyObject);
            } else {
                anyObject = {
                    productlistname: Productlistresponse.ListOfProducts[i].Name,
                    id: Productlistresponse.ListOfProducts[i].Sku,
                    ProductListreview: avgReview,
                    ImgProduct: Productlistresponse.ListOfProducts[i].Image,
                    productListPrice: {
                        text: "$ " + Productlistresponse.ListOfProducts[i].RegularPrice
                    },
                    Onsale: {
                        isVisible: false
                    }
                };
                dataArray.push(anyObject);
            }
        }
        kony.application.dismissLoadingScreen();
        if (dataArray.length === 0) {
            ProductListScreen.ProductListSegmentent.setData(dataArray);
            alert("Products not found");
        } else {
            ProductListScreen.ProductListSegmentent.setData(dataArray);
        }
    } else {
        kony.application.dismissLoadingScreen();
        alert("Failed ServiceCalls");
        //kony.ui.Alert({ message: "Failed ServiceCalls with opStatus " + compositeResponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Composite Service",yesLabel:"OK"}, {});
    }
}
//Function calls for getting the data of productsList as error.
function getProductListDataErrorCallback(error) {
    kony.application.dismissLoadingScreen();
    alert("Unable to fetch BestBuy Stores");
}
//Function calls for getting the productsList.
function getPrductList(catid) {
    productId = catid;
    if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
        initializeMobileFabric();
    } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
        getProductListData();
    }
}
//Function calls for getting the data of productsList.
function getProductListData() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Fetching products list...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[2];
        var headers = {};
        data = {
            CatogeryId: productId,
            ApiKey: apikey,
            pageSize: pagesize
        };
        mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, getProductListDataSuccessCallback, getProductListDataErrorCallback);
    } else alert("Network not available. Please check your network settings or try agiain after some time");
}
//Function calls for clicking on the row of productListScreen to show the productDetailsScreen. 
function ProductListRowClick() {
    ProductDetailsScreen.LblTotalReviews.text = "";
    var temperotySkuValue = ProductListScreen.ProductListSegmentent.selectedRowItems[0].id;
    getProductDetails(temperotySkuValue);
    Productdetailsreview(temperotySkuValue);
    ProductDetailsScreen.show();
}
//Function calls on clicking the back button on productListScreen,.
function onProductListBack() {
    firstPage = 1;
    HomeScreen.show();
    if (count === 0) {
        homeInit();
    }
}