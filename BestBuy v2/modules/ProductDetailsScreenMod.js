//Global variables.
var sku;
var apikey = "sdjvqsgy8dufawzjpgssz6ns";
var arrayMoreImages = [];
var arrayShoppingCart = [];

function getProductDetails(psku){
  sku = psku;
  if (!mobileFabricConfiguration.isKonySDKObjectInitialized) {
    initializeMobileFabric();
  } else if (mobileFabricConfiguration.isKonySDKObjectInitialized) {
    fetchDetailsForProduct();
  }
}

//Function calls for gettign the details of product.
function fetchDetailsForProduct() {
  if (kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)) {
    kony.application.showLoadingScreen("loadskin", "Fetching product details...", constants.LOADING_SCREEN_POSITION_FULL_SCREEN, false, true, {enableMenuKey: true, enableBackKey: true, progressIndicatorColor: "ffffff77"});
    mobileFabricConfiguration.integrationObj = mobileFabricConfiguration.konysdkObject.getIntegrationService(mobileFabricConfiguration.integrationServices[0].service);
    var operationName = mobileFabricConfiguration.integrationServices[0].operations[3];
    var headers = {};
    data = {SkuVal:sku,ApiKey:apikey};
    mobileFabricConfiguration.integrationObj.invokeOperation(operationName, headers, data, productDetailsSuccess, productDetailsError);
  } else
    alert ("Network not available. Please check your network settings or try agiain after some time");  
}

//Function calls on success for product details and setting data.
function productDetailsSuccess(detailsResponse) {
  if (detailsResponse !== null && detailsResponse.opstatus === 0) {
    if (detailsResponse.Product !== null ){
      shoppingcartitem = detailsResponse.Product;
	  arrayMoreImages = [];
      getImage(detailsResponse.Product.TopViewImage);
      getImage(detailsResponse.Product.MediumImage);
      getImage(detailsResponse.Product.ThumbnailImage);
      getImage(detailsResponse.Product.LargeImage);
      getImage(detailsResponse.Product.AlternateViewsImage);
      getImage(detailsResponse.Product.AngleImage);
      getImage(detailsResponse.Product.LargeFrontImage);
      getImage(detailsResponse.Product.RemoteControlImage);
      getImage(detailsResponse.Product.Image);
      getImage(detailsResponse.Product.BackViewImage);
      getImage(detailsResponse.Product.LeftViewImage);
      getImage(detailsResponse.Product.AccessoriesImage);
      getImage(detailsResponse.Product.EnergyGuideImage);
      getImage(detailsResponse.Product.RightViewImage);
      ProductDetailsScreen.ImgProductImage.src=detailsResponse.Product.MediumImage;
      ProductDetailsScreen.LblProductName.text=detailsResponse.Product.Name;
      ProductDetailsScreen.LblPrice.text = "";
      if (detailsResponse.Product.isOnSale === true) {
         ProductDetailsScreen.LblPrice.skin = "red";
      } else {
        ProductDetailsScreen.LblPrice.skin = "";
      }
      if (detailsResponse.Product.AvgReview > 0.0) {
    	ProductDetailsScreen.LblRatings.text = "Avg Review: " + detailsResponse.Product.AvgReview;
  	  } else {
        ProductDetailsScreen.LblRatings.text = "No reviews";
      }
      ProductDetailsScreen.LblProductDetails.text = detailsResponse.Product.Description;
      var customerReview = Math.floor(detailsResponse.Product.AvgReview);
      if (customerReview > 0 && customerReview <= 1) {
        ProductDetailsScreen.ImgRatings.src = "ratings_star_1.png";
      } else if (customerReview > 1 && customerReview <= 2) {
        ProductDetailsScreen.ImgRatings.src = "ratings_star_2.png";
      } else if (customerReview > 2 && customerReview <= 3) {
        ProductDetailsScreen.ImgRatings.src = "ratings_star_3.png";
      } else if (customerReview > 3 && customerReview <= 4) {
        ProductDetailsScreen.ImgRatings.src = "ratings_star_4.png";
      } else if (customerReview > 4) {
        ProductDetailsScreen.ImgRatings.src = "ratings_star_5.png";
      } else {
        ProductDetailsScreen.ImgRatings.src = "";
      }
      ProductDetailsScreen.LblPrice.text = detailsResponse.Product.isOnSale ? "$ " + detailsResponse.Product.SalePrice : "$ " + detailsResponse.Product.RegularPrice;
      kony.application.dismissLoadingScreen();
    } else {
      kony.application.dismissLoadingScreen();
      alert("No data found");
    }
  } else {
    kony.application.dismissLoadingScreen();
    kony.ui.Alert({message: "Failed ServiceCall with opStatus " + productlistresponse.opstatus, alertType:constants. ALERT_TYPE_ERROR, alertTitle: "Composite Service", yesLabel: "Ok"}, {});
  }
}

//Function calls on error for product details.
function productDetailsError(error) {
  kony.application.dismissLoadingScreen();
  alert ("Unable to fetch BestBuy Stores");
}

//Function calls for getting images.
function getImage(imageType) {
  if(imageType.length > 0){
    arrayMoreImages.push({"typeImage": imageType});
  }
}

//Function calls on clicking on add to cart button.
function MovetoCart() {
  saleprice = parseFloat(shoppingcartitem.SalePrice);
  regularprice = parseFloat(shoppingcartitem.RegularPrice);
  isFreeShipping = shoppingcartitem.isFreeShipping;
  if (shoppingcartitem.isOnSale === true) {
    arrayShoppingCart.push({LblProductCartName: shoppingcartitem.Name, ImgCart: "cartremoveitem.png", LblProductCartPrice: {text:"$ " + saleprice, skin:"red"}, cartdetailproductprice: saleprice, "saleprice": saleprice, "regularprice": regularprice, "isFreeShipping": isFreeShipping});
  } else {
    arrayShoppingCart.push({LblProductCartName: shoppingcartitem.Name, ImgCart: "cartremoveitem.png", LblProductCartPrice: {text:"$ " + regularprice, skin: ""}, cartdetailproductprice: regularprice, "saleprice": saleprice, "regularprice":regularprice, "isFreeShipping": isFreeShipping});
  }
  alert("Added to Cart");
}

//Function calls for hiding up arrow.
function hideUpArrow() {
  ProductDetailsScreen.FlexImageUpArrow.isVisible = false;
  ProductDetailsScreen.FlexImageDownArrow.isVisible = true;
}

//Function calls for hiding down arrow.
function hideDownArrow() {
  ProductDetailsScreen.FlexImageUpArrow.isVisible = true;
  ProductDetailsScreen.FlexImageDownArrow.isVisible = false;
}

//Function calls for clicking on back button on productDetailsScreen.
function onProductDetailsBack(){
  hideDownArrow();
  ProductDetailsScreen.LblTotalReviews.text = "";
  reviewarr = [];
  ProductDetailsScreen.SegmentReview.setData(reviewarr);
  reviewsMoveDown();
  ProductListScreen.show();
}
