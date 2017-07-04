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

function MapSuccessCallback(Mapresponse) {
    MapStoreArray = [];
    if (Mapresponse !== null && Mapresponse.opstatus === 0) {
        if (Mapresponse.ListOfStoreLocations.length > 0) {
            for (var i = 0; i < Mapresponse.ListOfStoreLocations.length; i++) {
                var mapobj = {
                    lat: Mapresponse.ListOfStoreLocations[i].Lattitutde,
                    lon: Mapresponse.ListOfStoreLocations[i].Longitude,
                    name: Mapresponse.ListOfStoreLocations[i].Name,
                    showCallout: true,
                    calloutData: {
                        MapStorename: Mapresponse.ListOfStoreLocations[i].Name,
                        MapStoreAddress: Mapresponse.ListOfStoreLocations[i].Address,
                        Mapcityregion: Mapresponse.ListOfStoreLocations[i].City + "," + Mapresponse.ListOfStoreLocations[i].Region,
                        MapPostalcode: Mapresponse.ListOfStoreLocations[i].PostalCode
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
        // The call failed because opstatus was not 0 so we'll alert the user and show that opststus
        kony.ui.Alert({
            message: "Service call failed with opstatus " + compositeResponse.opstatus,
            alertType: constants.ALERT_TYPE_ERROR,
            alertTitle: "Composite Service",
            yesLabel: "OK"
        }, {});
    }
}

function MapErrorCallBack(error) {
    //alert("inside the MapErrorCallBack method");
    kony.print(" ********** Entering into getProductListErrorCallback ********** ");
    kony.print(" ********** Failure in getProductListErrorCallback: " + JSON.stringify(error) + " ********** ");
    kony.application.dismissLoadingScreen();
    //alert ("error------"+ JSON.stringify(error) );
    alert(" Failed to fetch bestbuy stores. Please try again. ");
    kony.print(" ********** Exiting out of compositeServiceErrorCallback ********** ");
}
// callback function for home cart Map
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
}

function MapStoreCart() {
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    ShoppingCartScreen.show();
}

function MenuStoreMap() {
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    StoreLocatorScreen.show();
}