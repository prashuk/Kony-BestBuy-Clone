//Global variables.
var TotalGrand;
var animDefinition;
var freeShippingCount = 0;
//Function calls when shopping cart screen shows.
function init() {
    if (arrayShoppingCart.length > 0) {
        ShoppingCartScreen.SegmentShoppingCart.isVisible = true;
        ShoppingCartScreen.nodata.isVisible = false;
        ShoppingCartScreen.Totalcontent.isVisible = true;
        ShoppingCartScreen.SegmentShoppingCart.setData(arrayShoppingCart);
        Total();
    } else {
        ShoppingCartScreen.SegmentShoppingCart.isVisible = false;
        ShoppingCartScreen.nodata.isVisible = true;
        ShoppingCartScreen.Totalcontent.isVisible = false;
    }
}
//Function calls when an item is deleted from the shopping cart.
function deleteItemsfromcart() {
    var transformObject1 = kony.ui.makeAffineTransform();
    var transformObject2 = kony.ui.makeAffineTransform();
    transformObject1.scale(1, 1);
    transformObject2.scale(0, 0);
    var animDefinitionOne = {
        0: {
            "transform": transformObject1
        },
        100: {
            "transform": transformObject2
        }
    };
    var animDefinition = kony.ui.createAnimation(animDefinitionOne);
    var animConfig = {
        "duration": 0.7,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.NONE
    };
    var animationObject = {
        definition: animDefinition,
        config: animConfig
    };
    var selectedindex = ShoppingCartScreen.SegmentShoppingCart.selectedIndex[1];
    var secIndex = ShoppingCartScreen.SegmentShoppingCart.selectedIndex[0];
    ShoppingCartScreen.SegmentShoppingCart.removeAt(selectedindex, secIndex, animationObject);
    arrayShoppingCart.splice(selectedindex, 1);
    Total();
    if (arrayShoppingCart.length === 0) {
        kony.timer.schedule("disableTotalLblTimer", removeTotal, 1, true);
        ShoppingCartScreen.LblQualifies.isVisible = false;
    }
    TimeOut();
    totalanimation();
    unregisterForIdleTimeout();
}
//Function calls when last item is deleting from the cart and hides the 'Total:' label.
function removeTotal() {
    ShoppingCartScreen.SegmentShoppingCart.isVisible = false;
    ShoppingCartScreen.nodata.isVisible = true;
    try {
        kony.timer.cancel("disableTotalLblTimer");
    } catch (err) {
        alert("Error: " + err);
    }
}
//Function calls for calculating the total price of the cart.
function Total() {
    TotalGrand = 0.0;
    ShoppingCartScreen.totalvalue.text = "";
    ShoppingCartScreen.statictotal.text = "";
    if (arrayShoppingCart.length > 0) {
        for (var k = 0; k < arrayShoppingCart.length; k++) {
            TotalGrand = TotalGrand + arrayShoppingCart[k].cartdetailproductprice;
            ShoppingCartScreen.Totalcontent.isVisible = true;
            ShoppingCartScreen.totalvalue.text = "$ " + TotalGrand.toFixed(2);
            ShoppingCartScreen.statictotal.text = "Total: ";
        }
    }
    freeShippingQualifiesLbl();
}
//Function calls on the basis of freeShipping value.
function freeShippingQualifiesLbl() {
    freeShippingCount = 0;
    for (var l = 0; l < arrayShoppingCart.length; l++) {
        if (arrayShoppingCart[l].isFreeShipping === true) {
            freeShippingCount++;
        }
    }
    if (freeShippingCount == arrayShoppingCart.length) {
        ShoppingCartScreen.LblQualifies.isVisible = true;
    } else {
        ShoppingCartScreen.LblQualifies.isVisible = false;
    }
}
//Function calls if shopping cart screen stables for 2 minutes.
function TimeOut() {
    kony.application.registerForIdleTimeout(2, timeOut);
}
//Function call after ideal timeout and redirects to home screen.
function timeOut() {
    SearchCancelButton();
    catid = "cat00000";
    count = -1;
    getCategeoryData();
    BreadCrumbText = [];
    HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
    HomeScreen.BaseHeader.FlexBack.isVisible = false;
    firstPage = 1;
    HomeScreen.show();
}
//Function calls for unregistering the ideal timeout.
function unregisterForIdleTimeout() {
    kony.application.unregisterForIdleTimeout();
}