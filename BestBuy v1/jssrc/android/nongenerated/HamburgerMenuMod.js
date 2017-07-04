//Open
function openHamburgerMenuHomeScreen() {
    HomeScreen.MainFlex.animate(kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {});
    HomeScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    HomeScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}
//Close
function closeHamburgerMenuHomeScreen() {
    HomeScreen.MainFlex.animate(kony.ui.createAnimation({
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
        "duration": 0.25
    }, {});
    HomeScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    HomeScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

function redirectFromHomeScreenToHomeScreen() {
    closeHamburgerMenuHomeScreen();
    catid = "cat00000";
    count = 0;
    getCategeoryData();
    BreadCrumbText = [];
    HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
    HomeScreen.BaseHeader.FlexBack.isVisible = false;
    HomeScreen.show();
}

function redirectFromHomeScreenToStoreLocatorScreen() {
    closeHamburgerMenuHomeScreen();
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    StoreLocatorScreen.show();
}

function redirectFromHomeScreenToShoppingCartScreen() {
    closeHamburgerMenuHomeScreen();
    ShoppingCartScreen.show();
}
//Open
function openHamburgerMenuProductListScreen() {
    ProductListScreen.MainFlex.animate(kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {});
    ProductListScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    ProductListScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}
//Close
function closeHamburgerMenuProductListScreen() {
    ProductListScreen.MainFlex.animate(kony.ui.createAnimation({
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
        "duration": 0.25
    }, {});
    ProductListScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    ProductListScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

function redirectFromProductListScreenToHomeScreen() {
    closeHamburgerMenuProductListScreen();
    catid = "cat00000";
    count = 0;
    getCategeoryData();
    BreadCrumbText = [];
    HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
    HomeScreen.BaseHeader.FlexBack.isVisible = false;
    HomeScreen.show();
}

function redirectFromProductListScreenToStoreLocatorScreen() {
    closeHamburgerMenuProductListScreen();
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    StoreLocatorScreen.show();
}

function redirectFromProductListScreenToShoppingCartScreen() {
    closeHamburgerMenuProductListScreen();
    ShoppingCartScreen.show();
}
//Open
function openHamburgerMenuProductDetailsScreen() {
    ProductDetailsScreen.MainFlex.animate(kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {});
    ProductDetailsScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    ProductDetailsScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}
//Close
function closeHamburgerMenuProductDetailsScreen() {
    ProductDetailsScreen.MainFlex.animate(kony.ui.createAnimation({
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
        "duration": 0.25
    }, {});
    ProductDetailsScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    ProductDetailsScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

function redirectFromProductDetailsScreenToHomeScreen() {
    closeHamburgerMenuProductDetailsScreen();
    catid = "cat00000";
    count = 0;
    getCategeoryData();
    BreadCrumbText = [];
    HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
    HomeScreen.BaseHeader.FlexBack.isVisible = false;
    HomeScreen.show();
}

function redirectFromProductDetailsScreenToStoreLocatorScreen() {
    closeHamburgerMenuProductDetailsScreen();
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    StoreLocatorScreen.show();
}

function redirectFromProductDetailsScreenToShoppingCartScreen() {
    closeHamburgerMenuProductDetailsScreen();
    ShoppingCartScreen.show();
}
//Open
function openHamburgerMenuProductDetailsImageScreen() {
    ProductDetailImagesScreen.MainFlex.animate(kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {});
    ProductDetailImagesScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    ProductDetailImagesScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}
//Close
function closeHamburgerMenuProductDetailsImageScreen() {
    ProductDetailImagesScreen.MainFlex.animate(kony.ui.createAnimation({
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
        "duration": 0.25
    }, {});
    ProductDetailImagesScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    ProductDetailImagesScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

function redirectFromProductDetailImagesScreenToHomeScreen() {
    closeHamburgerMenuProductDetailsImageScreen();
    catid = "cat00000";
    count = 0;
    getCategeoryData();
    BreadCrumbText = [];
    HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
    HomeScreen.BaseHeader.FlexBack.isVisible = false;
    HomeScreen.show();
}

function redirectFromProductDetailImagesScreenToStoreLocatorScreen() {
    closeHamburgerMenuProductDetailsImageScreen();
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    StoreLocatorScreen.show();
}

function redirectFromProductDetailImagesScreenToShoppingCartScreen() {
    closeHamburgerMenuProductDetailsImageScreen();
    ShoppingCartScreen.show();
}
//Open
function openHamburgerMenuShoppingCartScreen() {
    ShoppingCartScreen.MainFlex.animate(kony.ui.createAnimation({
        "100": {
            "left": "80%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.25
    }, {});
    ShoppingCartScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    ShoppingCartScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}
//Close
function closeHamburgerMenuShoppingCartScreen() {
    ShoppingCartScreen.MainFlex.animate(kony.ui.createAnimation({
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
        "duration": 0.25
    }, {});
    ShoppingCartScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    ShoppingCartScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

function redirectFromShoppingCartScreenToHomeScreen() {
    closeHamburgerMenuShoppingCartScreen();
    catid = "cat00000";
    count = 0;
    getCategeoryData();
    BreadCrumbText = [];
    HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
    HomeScreen.BaseHeader.FlexBack.isVisible = false;
    HomeScreen.show();
}

function redirectFromShoppingCartScreenToStoreLocatorScreen() {
    closeHamburgerMenuShoppingCartScreen();
    MapStoreArray = [];
    StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
    StoreLocatorScreen.SearchTextfield.text = "";
    StoreLocatorScreen.show();
}

function redirectFromShoppingCartScreenToShoppingCartScreen() {
    closeHamburgerMenuShoppingCartScreen();
    ShoppingCartScreen.show();
}