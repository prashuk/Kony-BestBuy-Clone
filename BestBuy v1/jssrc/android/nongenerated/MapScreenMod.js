var city;
var apikey = "sdjvqsgy8dufawzjpgssz6ns";
var MapStoreArray = [];

function MapLocator() {
    if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
        initializeMobileFabric();
    } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
        MapList();
    }
}

function MapList() {
    var inputcity = StoreLocatorScreen.SearchTextfield.text;
    city = inputcity;
    if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
        if (null === inputcity || inputcity.trim().length === 0) {
            alert("please enter the city name---");
        } else {
            var inputstring = /^[a-zA-Z]+$/;
            if (inputcity.search(inputstring)) {
                alert("Please search for valid City name..");
            } else {
                kony.application.showLoadingScreen("loadskin", "Fetching stores from  !!!", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {
                    enableMenuKey: true,
                    enableBackKey: true,
                    progressIndicatorColor: "ffffff77"
                });
                mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
                var operationName = mobileFabricConfiguration.integrationServices[0].operations[5];
                var headers = {};
                data = {
                    city: city,
                    ApiKey: apikey
                };
                mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, MapSuccessCallback, MapErrorCallBack);
            }
        }
    } else alert("Network unavailable. Please check your network settings. ");
}

function MapSuccessCallback(ResponseMap) {
    MapStoreArray = [];
    if (ResponseMap !== null && ResponseMap.opstatus === 0) {
        if (ResponseMap.ListOfStoreLocations.length > 0) {
            for (var i = 0; i < ResponseMap.ListOfStoreLocations.length; i++) {
                var mapobj = {
                    lat: ResponseMap.ListOfStoreLocations[i].Lattitutde,
                    lon: ResponseMap.ListOfStoreLocations[i].Longitude,
                    name: ResponseMap.ListOfStoreLocations[i].Name,
                    showCallout: true,
                    calloutData: {
                        LblMapStoreName: ResponseMap.ListOfStoreLocations[i].Name,
                        LblMapStoreAddress: ResponseMap.ListOfStoreLocations[i].Address,
                        LblMapCityRegion: ResponseMap.ListOfStoreLocations[i].City + "," + ResponseMap.ListOfStoreLocations[i].Region,
                        LblMapPostalCode: ResponseMap.ListOfStoreLocations[i].PostalCode
                    }
                };
                MapStoreArray.push(mapobj);
                StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
                StoreLocatorScreen.MapScreen.zoomLevel = 10;
            }
            kony.application.dismissLoadingScreen();
        } else {
            alert("There is no data for the selected City");
            kony.application.dismissLoadingScreen();
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

function MapErrorCallBack(error) {
    kony.print(" ********** Entering into getProductListErrorCallback ********** ");
    kony.print(" ********** Failure in getProductListErrorCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    alert(" Failed to fetch bestbuy stores. Please try again. ");
    kony.print(" ********** Exiting out of compositeServiceErrorCallback ********** ");
}

function MapStoresHome() {
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    catid = "cat00000";
    count = 0;
    getCategeoryData();
    BreadCrumbText = [];
    HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
    HomeScreen.BaseHeader.FlexBack.isVisible = false;
    HomeScreen.show();
    StoreLocatorScreen.destroy();
}

function MapStoreCart() {
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    ShoppingCartScreen.show();
    StoreLocatorScreen.destroy();
}

function MenuStoreMap() {
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    StoreLocatorScreen.show();
    StoreLocatorScreen.menuPosition = 0;
}