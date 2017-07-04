//startup.js file
var appConfig = {
    appId: "BestBuy",
    appName: "BestBuy",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "192.168.2.12",
    serverPort: "80",
    secureServerPort: "443",
    isMFApp: false,
    eventTypes: [],
    url: "https://cognizantdigital-dev.konycloud.com/BestBuy/MWServlet",
    secureurl: "https://cognizantdigital-dev.konycloud.com/BestBuy/MWServlet",
    middlewareContext: "BestBuy"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    initializeCategoryTemplate();
    initializeProductImageTemplate();
    initializeProductListTemplate();
    initializeShoppingCartTemplate();
    initializeMaptemplate();
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
        APILevel: 7200
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            HomeScreen.show();
        }
    });
};

function loadResources() {
    kony.theme.packagedthemes(
        ["default"]);
    globalhttpheaders = {};
    callAppMenu();
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        eventTypes: []
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

function initializeApp() {
    kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
    //If default locale is specified. This is set even before any other app life cycle event is called.
    kony.i18n.setDefaultLocaleAsync("en", onSuccess, onFailure, null);
};