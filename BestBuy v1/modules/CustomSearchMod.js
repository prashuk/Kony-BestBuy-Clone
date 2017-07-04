//Global variables.
var regexPattern = /^[a-zA-z][a-zA-Z0-9]+$/;
var searchWord;

//Function calls for the validation of seachTextField on clicking enter/return/done on keyboard.
function OndoneCustomsearch() {
  searchWord = HomeScreen.CustomSearchTextField.text;
  HomeScreen.CustomSearchTextField.text = "";
  ProductListScreen.BaseHeader.FlexBack.isVisible = true;
  ProductListScreen.BaseHeader.FlexSearch.isVisible = false;
  customSearchValidation();
}

//Function calls for serviceCall of customSearch and also check wheather the network is available or not.
function  CustomSearchService() {
  var ListBoxCustomSearchValue = HomeScreen.ListBoxCustomSearch.selectedKey;
  if (ListBoxCustomSearchValue === "none") {
    searchProduct = searchWord;
  } else {
    searchProduct = searchWord + " & " + ListBoxCustomSearchValue;
  }
  ProductListScreen.LblResult.text = "Results for: " + searchWord;
  SearchCancelButton();
  customSearchOperations();
  ProductListScreen.show();
}

//Function calls for the validation of seachTextField.
function customSearchValidation() {
  if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
    initializeMobileFabric();
  } else {
    if (searchWord.trim() === "" || null === searchWord) {
        alert("Search textbox can't be empty");
      } else if (!searchWord.trim().match(regexPattern)) {
        alert("Enter a valid product name");
      } else {
        CustomSearchService();
      }
   }
}

//Function calls for checking the network availability of CustomSearch.
function customSearchOperations() {
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    kony.application.showLoadingScreen("loadskin","Fetching Stores...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , true,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor : "ffffff77"});
    mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
    var operationName = mobileFabricConfiguration.integrationServices[0].operations[1];
    var headers = {};
    data = {Text: searchProduct, ApiKey: apikey, pageSize: pagesize};
    mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers,data,getProductListDataSuccessCallback,getProductListDataErrorCallback);
  } else {
	alert ("Network not available. Please check your network settings or try agiain after some time");  
  }
}
