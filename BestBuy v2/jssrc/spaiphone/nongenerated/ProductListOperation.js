//Type your code here
var productid;
var apikey = "sdjvqsgy8dufawzjpgssz6ns";
var actualprice;
var newitemlabeltext;
var visibility;
var productsku;
var customerreview;
var pagesize = 10;
var total;
var startPage = 1;
var endPage;
var avgReview = 0;

function getPrductList(catid) {
    productid = catid;
    // alert("this is MovegetProductList----"+catid);
    if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
        initializeMobileFabric();
    } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
        getProductListData();
    }
}

function getProductListData() {
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Fetching products from  !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[2];
        var headers = {};
        data = {
            CatogeryId: catid,
            ApiKey: apikey,
            page: startPage,
            pageSize: pagesize
        };
        mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, getProductListDataSuccessCallback, getProductListDataErrorCallback);
    } else alert("Network unavailable. Please check your network settings. ");
}

function getProductListDataSuccessCallback(Productlistresponse) {
    HomeScreen.BaseHeader.FlexBack.isVisible = true;
    if (Productlistresponse !== null && Productlistresponse.opstatus === 0) {
        endPage = Number(Productlistresponse.totalPages);
        //alert(total);
        dataArray1 = [];
        if (startPage == 1) {
            //ProductListScreen.PreviousButton.setVisibility(false);
            ProductListScreen.PreviousButton.isVisible = false;
        } else {
            ProductListScreen.PreviousButton.isVisible = true;
            ProductListScreen.Totalpages.isVisible = true;
            // ProductListScreen.PreviousButton.setVisibility(true);
        }
        if (endPage == 1) {
            // ProductListScreen.NextButton.setVisibility(false);
            ProductListScreen.NextButton.isVisible = false;
            ProductListScreen.Totalpages.isVisible = true;
        } else {
            if (startPage === endPage) {
                // ProductListScreen.NextButton.setVisibility(false);
                ProductListScreen.NextButton.isVisible = false;
                ProductListScreen.Totalpages.isVisible = true;
            } else if (endPage === 0) {
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
                dataArray1.push(obj);
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
                dataArray1.push(obj);
            }
        }
        // alert(startPage);
        ProductListScreen.ProductListSegmentent.setData(dataArray1);
        // ProductListScreen.Totalpages.isVisible=true;
        ProductListScreen.Totalpages.text = "page" + " " + startPage + " " + "of" + " " + endPage;
        kony.application.dismissLoadingScreen();
    } else {
        kony.application.dismissLoadingScreen();
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
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

function prevPage() {
    if (startPage > 1) {
        startPage--;
        if (customsearch === true) {
            // alert("if previuos===="+customsearch);
            searchService();
        } else {
            // alert("else previuos===="+customsearch);
            getProductListData();
        }
    } else if (startPage === 1) {
        productListForm.prev.setVisibility(false);
    }
}

function nextPage() {
    if (startPage < endPage) {
        ++startPage;
        //  alert("print the start===="+customsearch);
        if (customsearch === true) {
            // alert("if next===="+customsearch);
            searchService();
        } else {
            // alert("else next===="+customsearch);
            getProductListData();
        }
    }
}

function customerAverageReview(review1) {
    if (review1 > 0.0) {
        avgReview = "Average User Rating:" + review1;
    } else {
        avgReview = "No reviews";
    }
}