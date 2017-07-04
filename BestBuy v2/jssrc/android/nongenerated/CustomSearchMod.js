var booleancustomsearch;
var inputsearchproduct;
var searchitem;
var regexPattern = /^[a-zA-z][a-zA-Z0-9]+$/;

function SearchButton() {
    HomeScreen.FlexCustomSearchArea.animate(kony.ui.createAnimation({
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
        "duration": 0.3
    }, {});
    HomeScreen.FlexHomeContent.animate(kony.ui.createAnimation({
        "100": {
            "top": "30%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.3
    }, {});
}

function SearchCancelButton() {
    HomeScreen.FlexCustomSearchArea.animate(kony.ui.createAnimation({
        "100": {
            "left": "100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.35
    }, {});
    HomeScreen.FlexHomeContent.animate(kony.ui.createAnimation({
        "100": {
            "top": "9.5%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.35
    }, {});
}

function OndoneCustomsearch() {
    searchitem = HomeScreen.CustomSearchTextField.text;
    HomeScreen.CustomSearchTextField.text = "";
    ProductListScreen.BaseHeader.FlexBack.isVisible = true;
    ProductListScreen.BaseHeader.FlexSearch.isVisible = false;
    ProductListScreen.Totalpages.text = "";
    booleancustomsearch = true;
    if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
        initializeMobileFabric();
    } else {
        if (null === searchitem || searchitem.trim() === "") {
            alert("Search product cannot be empty");
        } else if (!searchitem.trim().match(regexPattern)) {
            alert("Enter a Valid product name without special character");
        } else {
            CustomSearchService();
        }
    }
}

function CustomSearchService() {
    var ListBoxCustomSearchValue = HomeScreen.ListBoxCustomSearch.selectedKey;
    if (ListBoxCustomSearchValue === "none") {
        searchProduct = searchitem;
    } else {
        searchProduct = searchitem + "&" + ListBoxCustomSearchValue;
    }
    ProductListScreen.LblResult.text = "Results For: " + searchitem;
    SearchCancelButton();
    ProductListScreen.show();
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        kony.application.showLoadingScreen("loadskin", "Fetching Stores from!!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, true, true, {
            enableMenuKey: true,
            enableBackKey: true,
            progressIndicatorColor: "ffffff77"
        });
        mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
        var operationName = mobileFabricConfiguration.integrationServices[0].operations[1];
        var headers = {};
        data = {
            Text: searchProduct,
            ApiKey: apikey,
            pageNo: firstPage,
            pageSize: pagesize
        };
        mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, getProductListDataSuccessCallback, getProductListDataErrorCallback);
    } else {
        alert("Network unavailable. Please check your network settings. ");
    }
}