//Function calls for opening Hamburger Menu on HomeScreen.
function openHamburgerMenuHomeScreen(){
	HomeScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
        
    });
    HomeScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    HomeScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}

//Function calls for closing Hamburger Menu on HomeScreen.
function closeHamburgerMenuHomeScreen(){
    HomeScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
      
    });
    HomeScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    HomeScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

//Function calls on clicking Home/Stores/Cart field in Hamburger Menu when menu opens from HomeScreen.
function redirectFromHomeScreenToHomeScreen(){
  closeHamburgerMenuHomeScreen();
  catid="cat00000";
  count = -1;
  getCategeoryData();
  BreadCrumbText=[];
  HomeScreen.LblBreadcrumb.text=kony.i18n.getLocalizedString("Home");
  HomeScreen.BaseHeader.FlexBack.isVisible=false; 
  firstPage = 1;
  HomeScreen.show();
}
function redirectFromHomeScreenToStoreLocatorScreen(){
  closeHamburgerMenuHomeScreen();
  MapStoreArray= [];
  StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
  StoreLocatorScreen.SearchTextfield.text="";
  StoreLocatorScreen.show(); 
}
function redirectFromHomeScreenToShoppingCartScreen(){
  closeHamburgerMenuHomeScreen();
  firstPage = 1;
  ShoppingCartScreen.show(); 
}

//Function calls for opening Hamburger Menu on ProductListScreen.
function openHamburgerMenuProductListScreen(){
	ProductListScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
        
    });
    ProductListScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    ProductListScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}

//Function calls for closing Hamburger Menu on ProductListScreen.
function closeHamburgerMenuProductListScreen(){
    ProductListScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
      
    });
    ProductListScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    ProductListScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

//Function calls on clicking Home/Stores/Cart field in Hamburger Menu when menu opens from ProductListScreen.
function redirectFromProductListScreenToHomeScreen(){
  closeHamburgerMenuProductListScreen();
  catid="cat00000";
  count = -1;
  getCategeoryData();
  BreadCrumbText=[];
  HomeScreen.LblBreadcrumb.text=kony.i18n.getLocalizedString("Home");
  HomeScreen.BaseHeader.FlexBack.isVisible=false; 
  firstPage = 1;
  HomeScreen.show();
}
function redirectFromProductListScreenToStoreLocatorScreen(){
  closeHamburgerMenuProductListScreen();
  MapStoreArray= [];
  StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
  StoreLocatorScreen.SearchTextfield.text="";
  firstPage = 1;
  StoreLocatorScreen.show(); 
}
function redirectFromProductListScreenToShoppingCartScreen(){
  closeHamburgerMenuProductListScreen();
  firstPage = 1;
  ShoppingCartScreen.show(); 
}

//Function calls for opening Hamburger Menu on ProductDetailsScreen.
function openHamburgerMenuProductDetailsScreen(){
	ProductDetailsScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
        
    });
    ProductDetailsScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    ProductDetailsScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}

//Function calls for closing Hamburger Menu on ProductDetailsScreen.
function closeHamburgerMenuProductDetailsScreen(){
    ProductDetailsScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
      
    });
    ProductDetailsScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    ProductDetailsScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

///Function calls on clicking Home/Stores/Cart field in Hamburger Menu when menu opens from ProductDetailsScreen.
function redirectFromProductDetailsScreenToHomeScreen(){
  closeHamburgerMenuProductDetailsScreen();
  catid = "cat00000";
  count = -1;
  getCategeoryData();
  BreadCrumbText = [];
  HomeScreen.LblBreadcrumb.text=kony.i18n.getLocalizedString("Home");
  HomeScreen.BaseHeader.FlexBack.isVisible=false;
  reviewsMoveDown();
  firstPage = 1;
  HomeScreen.show();
}
function redirectFromProductDetailsScreenToStoreLocatorScreen(){
  closeHamburgerMenuProductDetailsScreen();
  MapStoreArray= [];
  StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
  StoreLocatorScreen.SearchTextfield.text = "";
  StoreLocatorScreen.show();
  firstPage = 1;
  reviewsMoveDown();
}
function redirectFromProductDetailsScreenToShoppingCartScreen(){
  closeHamburgerMenuProductDetailsScreen();
  reviewsMoveDown();
  firstPage = 1;
  ShoppingCartScreen.show();
}

//Function calls for opening Hamburger Menu on ProductDetailsImageScreen.
function openHamburgerMenuProductDetailsImageScreen(){
	ProductDetailImagesScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
        
    });
    ProductDetailImagesScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    ProductDetailImagesScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}

//Function calls for closing Hamburger Menu on ProductDetailsImageScreen.
function closeHamburgerMenuProductDetailsImageScreen(){
    ProductDetailImagesScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
      
    });
    ProductDetailImagesScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    ProductDetailImagesScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

//Function calls on clicking Home/Stores/Cart field in Hamburger Menu when menu opens from ProductDetailImagesScreen.
function redirectFromProductDetailImagesScreenToHomeScreen(){
  closeHamburgerMenuProductDetailsImageScreen();
  catid="cat00000";
  count = -1;
  getCategeoryData();
  BreadCrumbText=[];
  HomeScreen.LblBreadcrumb.text=kony.i18n.getLocalizedString("Home");
  HomeScreen.BaseHeader.FlexBack.isVisible=false; 
  firstPage = 1;
  HomeScreen.show();
}
function redirectFromProductDetailImagesScreenToStoreLocatorScreen(){
  closeHamburgerMenuProductDetailsImageScreen();
  MapStoreArray= [];
  StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
  StoreLocatorScreen.SearchTextfield.text="";
  firstPage = 1;
  StoreLocatorScreen.show(); 
}
function redirectFromProductDetailImagesScreenToShoppingCartScreen(){
  closeHamburgerMenuProductDetailsImageScreen();
  firstPage = 1;
  ShoppingCartScreen.show(); 
}

//Function calls for opening Hamburger Menu on ShoppingCartScreen.
function openHamburgerMenuShoppingCartScreen(){
	ShoppingCartScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
        
    });
    ShoppingCartScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    ShoppingCartScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}

//Function calls for closing Hamburger Menu on ShoppingCartScreen.
function closeHamburgerMenuShoppingCartScreen(){
    ShoppingCartScreen.MainFlex.animate(
    kony.ui.createAnimation({
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
    }, {
      
    });
    ShoppingCartScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    ShoppingCartScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

//Function calls on clicking Home/Stores/Cart field in Hamburger Menu when menu opens from ShoppingCartScreen.
function redirectFromShoppingCartScreenToHomeScreen(){
  closeHamburgerMenuShoppingCartScreen();
  catid = "cat00000";
  count = -1;
  getCategeoryData();
  BreadCrumbText = [];
  HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
  HomeScreen.BaseHeader.FlexBack.isVisible = false;
  firstPage = 1;
  HomeScreen.show();
}
function redirectFromShoppingCartScreenToStoreLocatorScreen(){
  closeHamburgerMenuShoppingCartScreen();
  MapStoreArray = [];
  StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
  StoreLocatorScreen.SearchTextfield.text="";
  firstPage = 1;
  StoreLocatorScreen.show(); 
}
function redirectFromShoppingCartScreenToShoppingCartScreen(){
  closeHamburgerMenuShoppingCartScreen();
  firstPage = 1;
  ShoppingCartScreen.show(); 
}

//Function calls for opening Hamburger Menu on StoreLocatorScreen.
function openHamburgerMenuStoreLocatorScreen(){
	StoreLocatorScreen.FlexStoreLocator.animate(
    kony.ui.createAnimation({
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
    }, {
        
    });
    StoreLocatorScreen.BaseHeader.HamburgerMenuOpen.isVisible = false;
    StoreLocatorScreen.BaseHeader.HamburgerMenuClose.isVisible = true;
}

//Function calls for closing Hamburger Menu on StoreLocatorScreen.
function closeHamburgerMenuStoreLocatorScreen(){
    StoreLocatorScreen.FlexStoreLocator.animate(
    kony.ui.createAnimation({
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
    }, {
      
    });
    StoreLocatorScreen.BaseHeader.HamburgerMenuOpen.isVisible = true;
    StoreLocatorScreen.BaseHeader.HamburgerMenuClose.isVisible = false;
}

//Function calls on clicking Home/Stores/Cart field in Hamburger Menu when menu opens from StoreLocatorScreen.
function redirectFromStoreLocatorScreenToHomeScreen(){
  closeHamburgerMenuStoreLocatorScreen();
  MapStoreArray = [];
  StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
  StoreLocatorScreen.SearchTextfield.text = "";
  catid = "cat00000";
  count = -1;
  firstPage = 1;
  getCategeoryData();
  BreadCrumbText = [];
  HomeScreen.LblBreadcrumb.text = kony.i18n.getLocalizedString("Home");
  HomeScreen.BaseHeader.FlexBack.isVisible = false;
  HomeScreen.show();
  StoreLocatorScreen.destroy();
  
}
function redirectFromStoreLocatorScreenToStoreLocatorScreen(){
  closeHamburgerMenuStoreLocatorScreen();
  firstPage = 1;
  StoreLocatorScreen.show();
}
function redirectFromStoreLocatorScreenToShoppingCartScreen(){
  closeHamburgerMenuStoreLocatorScreen();
  firstPage = 1;  
  MapStoreArray = [];
  StoreLocatorScreen.MapScreen.locationData = MapStoreArray;
  StoreLocatorScreen.SearchTextfield.text = "";
  ShoppingCartScreen.show();
  StoreLocatorScreen.destroy();
}
