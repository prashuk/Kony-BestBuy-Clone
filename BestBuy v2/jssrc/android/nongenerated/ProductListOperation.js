var productId;
var apikey = "sdjvqsgy8dufawzjpgssz6ns";
var actualPrice;
var newItemLabelText;
var visibility;
var skuOfProduct;
var reviewCustomer;
var pagesize = 10;
var total;
var firstPage = 1;
var lastPage;
var avgReview = 0;

function getPrductList(catid) {
    productId = catid;
    if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
        initializeMobileFabric();
    } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
        getProductListData();
    }
}

function getProductListData() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Fetching list...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
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
            page: firstPage,
            pageSize: pagesize
        };
        mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, getProductListDataSuccessCallback, getProductListDataErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getProductListDataSuccessCallback(Productlistresponse) {
    HomeScreen.BaseHeader.FlexBack.isVisible = true;
    if (Productlistresponse !== null && Productlistresponse.opstatus === 0) {
        lastPage = Number(Productlistresponse.totalPages);
        dataArray = [];
        if (firstPage == 1) {
            //ProductListScreen.PreviousButton.setVisibility(false);
            ProductListScreen.PreviousButton.isVisible = false;
        } else {
            ProductListScreen.PreviousButton.isVisible = true;
            ProductListScreen.Totalpages.isVisible = true;
            //ProductListScreen.PreviousButton.setVisibility(true);
        }
        if (lastPage == 1) {
            //ProductListScreen.NextButton.setVisibility(false);
            ProductListScreen.NextButton.isVisible = false;
            ProductListScreen.Totalpages.isVisible = true;
        } else {
            if (firstPage === lastPage) {
                //ProductListScreen.NextButton.setVisibility(false);
                ProductListScreen.NextButton.isVisible = false;
                ProductListScreen.Totalpages.isVisible = true;
            } else if (lastPage === 0) {
                alert("No product Available Browse for other products");
                ProductListScreen.PreviousButton.isVisible = false;
                ProductListScreen.NextButton.isVisible = false;
                ProductListScreen.Totalpages.isVisible = false;
            } else {
                ProductListScreen.NextButton.isVisible = true;
                ProductListScreen.Totalpages.isVisible = true;
            }
            //ProductListScreen.NextButton.setVisibility(true);
        }
        for (var i = 0; i < Productlistresponse.ListOfProducts.length; i++) {
            var obj;
            var skincolor;
            var banner;
            customerAverageReview(Productlistresponse.ListOfProducts[i].AverageReview);
            if (Productlistresponse.ListOfProducts[i].isOnSale === true) {
                obj = {
                    productlistname: Productlistresponse.ListOfProducts[i].Name,
                    id: Productlistresponse.ListOfProducts[i].Sku,
                    productListPrice: {
                        text: "$ " + Productlistresponse.ListOfProducts[i].SalesPrice,
                        skin: "red"
                    },
                    ProductListreview: avgReview,
                    ImgProduct: Productlistresponse.ListOfProducts[i].Image,
                    Onsale: {
                        isVisible: true
                    }
                };
                dataArray.push(obj);
            } else {
                obj = {
                    productlistname: Productlistresponse.ListOfProducts[i].Name,
                    id: Productlistresponse.ListOfProducts[i].Sku,
                    ImgProduct: Productlistresponse.ListOfProducts[i].Image,
                    productListPrice: {
                        text: "$ " + Productlistresponse.ListOfProducts[i].RegularPrice
                    },
                    ProductListreview: avgReview,
                    Onsale: {
                        isVisible: false
                    }
                };
                dataArray.push(obj);
            }
        }
        ProductListScreen.ProductListSegmentent.setData(dataArray);
        //ProductListScreen.Totalpages.isVisible=true;
        ProductListScreen.Totalpages.text = "page" + " " + firstPage + " " + "of" + " " + lastPage;
        kony.application.dismissLoadingScreen();
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

function getProductListDataErrorCallback(error) {
    kony.print(" ********** Entering into compositeServiceErrorCallback ********** ");
    kony.print(" ********** Failure in compositeServiceErrorCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Failed to fetch bestbuy stores. Please try again. " + JSON.stringify(error));
    kony.print(" ********** Exiting out of compositeServiceErrorCallback ********** ");
}

function goToPreviousPage() {
    if (firstPage > 1) {
        firstPage--;
        if (booleancustomsearch === true) {
            CustomSearchService();
        } else {
            getProductListData();
        }
    } else if (firstPage === 1) {
        ProductListScreen.prev.setVisibility(false);
    }
}

function goToNextPage() {
    if (firstPage < lastPage) {
        ++firstPage;
        if (booleancustomsearch === true) {
            CustomSearchService();
        } else {
            getProductListData();
        }
    }
}

function customerAverageReview(rev) {
    if (rev > 0.0) {
        avgReview = "Average User Rating: " + rev;
    } else {
        avgReview = "No reviews";
    }
}

function ProductListRowClick() {
    //MoveflexDown();
    ProductDetailsScreen.LblTotalReviews.text = "";
    var tempSku = ProductListScreen.ProductListSegmentent.selectedRowItems[0].id;
    getProductDetails(tempSku);
    Productdetailsreview(tempSku);
    ProductDetailsScreen.show();
}

function onProductListBack() {
    HomeScreen.show();
    if (count === 0) {
        homeInit();
    }
}