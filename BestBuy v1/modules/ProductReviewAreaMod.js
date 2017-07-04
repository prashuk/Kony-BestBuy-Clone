//Global variables
var psku;
var starImages;
var total;
var firstPage = 1;
var lastPage;
var page;

//Function calls for assigning the sku value.
function Productdetailsreview(sku){
  psku=sku;
  if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
    initializeMobileFabric();
  } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
    Productdetailsdetailreviewresponse();
  }
}

//Function calls for assigning value and checking network availibilty.
function Productdetailsdetailreviewresponse(){
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    kony.application.showLoadingScreen("loadskin","Fetching reviews/details...",constants.LOADING_SCREEN_POSITION_FULL_SCREEN , false,true,{enableMenuKey:true,enableBackKey:true, progressIndicatorColor: "ffffff77"});
    mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
    var operationName = mobileFabricConfiguration.integrationServices[0].operations[4];
    var headers = {};
    data = {SkuVal: psku, ApiKey: apikey, page: firstPage};
    mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, reviewSuccess, reviewError);
  } else
    alert ("Network not available. Please check your network settings or try agiain after some time "); 
}

//Function calls if Productdetailsdetailreviewresponse function passes in success condition.
function reviewSuccess(detailreviewresponse) {
  reviewarr = [];
  ProductDetailsScreen.Lblnoreviews.isVisible = false;
  if (detailreviewresponse !== null && detailreviewresponse.opstatus === 0) { 
    if(detailreviewresponse.ListOfReviews.length > 0) {
      if (detailreviewresponse.Total > 0) {
      	ProductDetailsScreen.LblTotalReviews.text = "Total reviews: " + detailreviewresponse.Total;
        lastPage = Number(detailreviewresponse.TotalPages);
        if (firstPage == 1) {
          ProductDetailsScreen.PreviousButton.isVisible = false;
        } else {
          ProductDetailsScreen.PreviousButton.isVisible = true;
          ProductDetailsScreen.Totalpages.isVisible = true;
        }
        if (lastPage == 1) {
          ProductDetailsScreen.NextButton.isVisible = false;
          ProductDetailsScreen.Totalpages.isVisible = true;
        } else {
          if (firstPage === lastPage) {
            ProductDetailsScreen.NextButton.isVisible = false;
            ProductDetailsScreen.Totalpages.isVisible = true;
          } else if (lastPage === 0) {
            alert("Products not found");
            ProductDetailsScreen.PreviousButton.isVisible = false;
            ProductDetailsScreen.NextButton.isVisible = false;
            ProductDetailsScreen.Totalpages.isVisible = false;
    	  } else {
            ProductDetailsScreen.NextButton.isVisible = true;
            ProductDetailsScreen.Totalpages.isVisible = true;
          }
        } 
      }
      for(var i = 0; i < detailreviewresponse.ListOfReviews.length; i++) {
        var customerReview = Math.floor(detailreviewresponse.ListOfReviews[i].Rating);
        if (customerReview > 0 && customerReview <= 1) {
          starImages = "ratings_star_1.png";
        } else if (customerReview > 1 && customerReview <= 2){
           starImages = "ratings_star_2.png";
        } else if (customerReview > 2 && customerReview <= 3){
           starImages = "ratings_star_3.png";
        } else if (customerReview > 3 && customerReview <= 4){
           starImages = "ratings_star_4.png";
        } else if (customerReview > 4 ){
           starImages = "ratings_star_5.png";
        } else {
           starImages = "";
        }
        reviewobj = {
          LblComment: detailreviewresponse.ListOfReviews[i].Title,
          LblSubmittedBy: "Submitted By: " + detailreviewresponse.ListOfReviews[i].Name,
          ImgStarRating: starImages,
          LblDetailComment:detailreviewresponse.ListOfReviews[i].Comment
        };
        reviewarr.push(reviewobj);
      }
      if (firstPage == lastPage && firstPage == 1) {
        ProductDetailsScreen.Totalpages.text="Page 1";
      } else {
        ProductDetailsScreen.Totalpages.text="Page" + " " + firstPage + " "  + "of" + " " + lastPage;
      }
      ProductDetailsScreen.SegmentReview.setData(reviewarr);
      kony.application.dismissLoadingScreen();    
    } else {
      kony.application.dismissLoadingScreen();
      ProductDetailsScreen.LblTotalReviews.text = "";
      ProductDetailsScreen.FlexImageUpArrow.isVisible = false;
      ProductDetailsScreen.Lblnoreviews.isVisible = true;
    }
  } else {
    kony.application.dismissLoadingScreen();
    alert("Failed ServiceCalls");
    kony.ui.Alert({message: "Failed ServiceCalls with opStatus " + productlistresponse.opstatus,alertType:constants. ALERT_TYPE_ERROR, alertTitle:"Composite Service",yesLabel:"OK"}, {});
  }
}

//Function calls if Productdetailsdetailreviewresponse function passes in fail condition.
function reviewError(error) {
  kony.application.dismissLoadingScreen();
  alert ("Unable to fetch BestBuy Stores ");
}

////Function calls on clicking the previous button.
function goToPreviousPage() {
  if (firstPage > 1) {
    firstPage--;
    Productdetailsdetailreviewresponse();
  } else if (firstPage === 1) {
    ProductDetailsScreen.PreviousButton.setVisibility(false);
  }
}

//Function calls on clicking the next button.
function goToNextPage() {
  if (firstPage < lastPage) {
    ++firstPage;
    Productdetailsdetailreviewresponse();
  }
}
