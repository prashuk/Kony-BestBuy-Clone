//Type your code here
function TimeOut() {
    kony.application.registerForIdleTimeout(2, timeOut);
}

function timeOut() {
    SearchCancelButton();
    catid = "cat00000";
    count = 0;
    getCategeoryData();
    BreadCrumbText = [];
    HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
    HomeScreen.BaseHeader.FlexBack.isVisible = false;
    HomeScreen.show();
}

function unregisterForIdleTimeout() {
    kony.application.unregisterForIdleTimeout();
}
//Type your code here
var TotalofOnsale = 0.0,
    TotalofRegular = 0.0;
var TotalGrand = 0.0;
var finalAnimation;
var animDefinition;
var myVar;

function init() {
    if (shoppingcartarray.length > 0) {
        ShoppingCartScreen.SegmentShoppingCart.isVisible = true;
        ShoppingCartScreen.nodata.isVisible = false;
        ShoppingCartScreen.Totalcontent.isVisible = true;
        ShoppingCartScreen.SegmentShoppingCart.setData(shoppingcartarray);
        Total();
        freeShipping();
    } else {
        ShoppingCartScreen.SegmentShoppingCart.isVisible = false;
        ShoppingCartScreen.nodata.isVisible = true;
        ShoppingCartScreen.Totalcontent.isVisible = false;
    }
}
// remove cart item
function deleteItemsfromcart() {
    // sravani added
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
    // animation end
    var selectedindex = ShoppingCartScreen.SegmentShoppingCart.selectedIndex[1];
    var secIndex = ShoppingCartScreen.SegmentShoppingCart.selectedIndex[0];
    ShoppingCartScreen.SegmentShoppingCart.removeAt(selectedindex, secIndex, animationObject);
    shoppingcartarray.splice(selectedindex, 1);
    Total();
    freeShipping();
    if (shoppingcartarray.length === 0) {
        kony.timer.schedule("mytimer", test, 1, true);
    }
    totalanimation();
    unregisterForIdleTimeout();
    TimeOut();
}

function test() {
    ShoppingCartScreen.SegmentShoppingCart.isVisible = false;
    ShoppingCartScreen.nodata.isVisible = true;
    try {
        kony.timer.cancel("mytimer");
    } catch (err) {
        alert("error in second button onclick and err is:: " + err);
    }
}
var freeShippingCount = 0;

function Total() {
    TotalGrand = 0.0;
    ShoppingCartScreen.totalvalue.text = "";
    ShoppingCartScreen.statictotal.text = "";
    if (shoppingcartarray.length > 0) {
        for (var k = 0; k < shoppingcartarray.length; k++) {
            TotalGrand = TotalGrand + shoppingcartarray[k].cartdetailproductprice;
            if (shoppingcartarray[k].isFreeShipping === true || shoppingcartarray[k].LblProductCartPrice == shoppingcartarray[k].regularprice) {
                freeShippingCount++;
            }
            ShoppingCartScreen.LblQualifies.isVisible = freeShippingCount == shoppingcartarray.length ? true : false;
            ShoppingCartScreen.Totalcontent.isVisible = true;
            ShoppingCartScreen.totalvalue.text = "$" + TotalGrand.toFixed(2);
            ShoppingCartScreen.statictotal.text = "Total :";
        }
    }
}

function freeShipping() {
    ShoppingCartScreen.LblQualifies.text = "";
    ShoppingCartScreen.LblQualifies.skin = "noskin";
}

function totalanimation() {
    var trans100 = kony.ui.makeAffineTransform();
    trans100.rotate3D(180, 0, 1, 0);
    ShoppingCartScreen.totalvalue.animate(kony.ui.createAnimation({
        "100": {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_BACKWARDS,
        "duration": 0.75
    }, {});
}