//Global variables.
var region;
var apikey = "sdjvqsgy8dufawzjpgssz6ns";
var MapStoreArray = [];

//Function calls for initializing the maps.
function MapLocator() {
  if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
    initializeMobileFabric();
  } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
    MapList();
  }
}

//Function calls on searching the particular region.
function MapList() {
  var searchedRegion = StoreLocatorScreen.SearchTextfield.text;
  region = searchedRegion;
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    if (searchedRegion.trim().length === 0 || null === searchedRegion) {
      alert("Search textbox can't be empty");
    } else {
      var inputstring = /^[a-zA-Z]+$/; 
      if(searchedRegion.search(inputstring)){
        alert("Enter a valid region name");
      } else {
        kony.application.showLoadingScreen("loadskin", "Fetching stores...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {enableMenuKey: true,enableBackKey: true, progressIndicatorColor: "ffffff77"});
    	mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
    	var operationName = mobileFabricConfiguration.integrationServices[0].operations[5];
    	var headers = {};
    	data = {region: region, ApiKey: apikey};
		mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, MapSuccessCallback, MapErrorCallBack);
 	  }
    }
  } else
    alert ("Network not available. Please check your network settings or try agiain after some time"); 
}

//Function calls for success & setting data.
function MapSuccessCallback(ResponseMap){
  MapStoreArray = [];
  if (ResponseMap !== null && ResponseMap.opstatus === 0){
    if (ResponseMap.ListOfStoreLocations.length>0) {
      for(var i = 0; i < ResponseMap.ListOfStoreLocations.length; i++) {
  	    var mapobj = {
          lat: ResponseMap.ListOfStoreLocations[i].Lattitutde,
	      lon: ResponseMap.ListOfStoreLocations[i].Longitude,
	      name: ResponseMap.ListOfStoreLocations[i].Name, 
	      showCallout: true, calloutData : { LblMapStoreName:ResponseMap.ListOfStoreLocations[i].Name, LblMapStoreAddress:ResponseMap.ListOfStoreLocations[i].Address, LblMapCityRegion:ResponseMap.ListOfStoreLocations[i].City + "," + ResponseMap.ListOfStoreLocations[i].Region, LblMapPostalCode:ResponseMap.ListOfStoreLocations[i].PostalCode }
	      };
          MapStoreArray.push(mapobj);
          StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
          StoreLocatorScreen.MapScreen.zoomLevel = 10;
       }
       kony.application.dismissLoadingScreen();
    } else {
      alert ("Not found");
      kony.application.dismissLoadingScreen();
    }
  } else {
    kony.application.dismissLoadingScreen();
    alert("Failed ServiceCalls");
    //kony.ui.Alert({ message: "Failed ServiceCalls with opStatus " + compositeResponse.opstatus,alertType: constants. ALERT_TYPE_ERROR, alertTitle:"Composite Service",yesLabel:"Ok"}, {});
  }
}

//Function calls for error.
function MapErrorCallBack(error) {
  kony.application.dismissLoadingScreen();
  alert ("Unable to fetch BestBuy Stores");
}
