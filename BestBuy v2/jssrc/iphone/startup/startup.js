//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "BestBuy",
    appName: "BestBuy",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.2.12",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "BestBuy",
    isMFApp: false,
    eventTypes: ["FormEntry", "ServiceRequest", "Error", "Crash"],
    url: "https://cognizantdigital-dev.konycloud.com/BestBuy/MWServlet",
    secureurl: "https://cognizantdigital-dev.konycloud.com/BestBuy/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    kony.application.setCheckBoxSelectionImageAlignment(constants.CHECKBOX_SELECTION_IMAGE_ALIGNMENT_RIGHT);
    kony.application.setDefaultTextboxPadding(false);
    kony.application.setRespectImageSizeForImageWidgetAlignment(true);
    initializeCategoryTemplate();
    initializeProductImageTemplate();
    initializeProductListTemplate();
    initializeProductReviewTemplate();
    initializeShoppingCartTemplate();
    initializeMapTemplate();
    HamburgerScreenGlobals();
    HomeScreenGlobals();
    ProductDetailImagesScreenGlobals();
    ProductDetailsScreenGlobals();
    ProductListScreenGlobals();
    ShoppingCartScreenGlobals();
    StoreLocatorScreenGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7200
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            HomeScreen.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}

function onSuccess(oldlocalname, newlocalename, info) {
    loadResources();
};

function onFailure(errorcode, errormsg, info) {
    loadResources();
};
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;