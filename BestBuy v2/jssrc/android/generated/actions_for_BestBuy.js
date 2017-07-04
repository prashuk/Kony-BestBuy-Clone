//actions.js file 
function AS_FlexContainer_0eb82c02d1ae4205a94829df367d6b8f(eventobject) {
    return closeHamburgerMenu.call(this);
}

function AS_FlexContainer_b9123f6c22ef4a41b51d30ea6b1f99a0(eventobject) {
    return openHamburgerMenu.call(this);
}

function AS_FlexContainer_c62824988a0e4596ae4e16d5b2fd6578(eventobject) {
    return openHamburgerMenuHomeScreen.call(this);
}

function AS_AppMenu_64663dbb8e7d4ddfa03ac5bb8c2cde57() {
    return MenuStoreMap.call(this);
}

function AS_AppMenu_7e2676cb6c164afeb819c0c03ecc1d62() {
    return MapStoresHome.call(this);
}

function AS_AppMenu_c1edb3d261df4581a00b7e6b98721853() {
    return MapStoreCart.call(this);
}

function AS_Button_07739b5e6912498c9a8d636c504a6fe8(eventobject) {
    return MapLocator.call(this);
}

function AS_Button_1c6e68be0cf747459c5d47b331cdf8bd(eventobject) {
    return prevPage.call(this);
}

function AS_Button_43a99d2596ce4550b29b570e30236985(eventobject) {
    return nextPage.call(this);
}

function AS_Button_740dbaada4134bd48aa734d57b713650(eventobject) {
    return MovetoCart.call(this);
}

function AS_Button_93c8d0494a3146a48a0334318fcc9cd8(eventobject) {
    return SearchCancelButton.call(this);
}

function AS_Button_9de96cb59fd5424099b917405666da3c(eventobject) {
    return goToNextPage.call(this);
}

function AS_Button_ab8095a2d5ab4b6885bf143fa48446f3(eventobject) {
    return goToPreviousPage.call(this);
}

function AS_Button_c7e971779b6542aea100c5d88c0f80f1(eventobject) {
    return MapLocator.call(this);
}

function AS_Button_d76a5ac384974d6a9ab121a63ee68225(eventobject, x, y) {}

function AS_FlexContainer_0091d0c4199b473e8965347af21502aa(eventobject) {
    return openHamburgerMenuProductListScreen.call(this);
}

function AS_FlexContainer_00ecfdacceb04432a5cc78cf202b6ba8(eventobject) {
    return reviewsMoveup.call(this);
}

function AS_FlexContainer_0f4b431423b4444a8626c9abe848f23b(eventobject) {
    AS_FlexContainer_c62824988a0e4596ae4e16d5b2fd6578(eventobject);
    closeHamburgerMenuHomeScreen.call(this);
}

function AS_FlexContainer_152fed30c90049068577740c3969ca82(eventobject) {
    return openHamburgerMenuProductDetailsScreen.call(this);
}

function AS_FlexContainer_189a72d2655c411c866fe765a8b01c01(eventobject) {
    return redirectFromProductListScreenToShoppingCartScreen.call(this);
}

function AS_FlexContainer_2470f5e5364d49249cb9f7a9e3baeffe(eventobject) {
    return backToHomePage.call(this);
}

function AS_FlexContainer_277e7501b9df430a8a907f0178e3b138(eventobject) {
    return redirectFromHomeScreenToHomeScreen.call(this);
}

function AS_FlexContainer_28572f53a6a04723a75e6316324a52b6(eventobject) {
    return redirectFromHomeScreenToStoreLocatorScreen.call(this);
}

function AS_FlexContainer_32e5b741fb5c4113ace1116740e810ae(eventobject) {
    return backToHomePage.call(this);
}

function AS_FlexContainer_34237373efef48e6958cfe243016e8eb(eventobject) {
    return redirectToStoreLocatorScreen.call(this);
}

function AS_FlexContainer_3dce1f14cf8d417e91dfcaa25a6d794e(eventobject) {
    return openHamburgerMenuShoppingCartScreen.call(this);
}

function AS_FlexContainer_46ae63b169284f31b50cdfea9a5384d3(eventobject) {
    closeHamburgerMenuProductListScreen.call(this);
}

function AS_FlexContainer_4a2b50531e4e48cea5074bf5dc997ec3(eventobject) {
    return onProductListBack.call(this);
}

function AS_FlexContainer_4a70cd5d39ec4fa7b0ca4cde1b19a38a(eventobject) {
    return redirectToHomeScreen.call(this);
}

function AS_FlexContainer_4b1abe42913040079765ac4499383ea0(eventobject) {
    return redirectFromProductDetailsScreenToShoppingCartScreen.call(this);
}

function AS_FlexContainer_4cab8504cc7c4c13bf56196d9259ae2d(eventobject) {
    return redirectFromProductDetailsScreenToHomeScreen.call(this);
}

function AS_FlexContainer_520de9768566481c9c22a6fdb0350b66(eventobject, x, y) {
    function MOVE_ACTION____e9c2d0fe8c904f40a543a446de9a43c5_Callback() {}

    function MOVE_ACTION____4643ee8bd51e4e908b241a83f8b2f43e_Callback() {}
    HomeScreen.FlexCustomSearchArea.animate(kony.ui.createAnimation({
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
        "animationEnd": MOVE_ACTION____4643ee8bd51e4e908b241a83f8b2f43e_Callback
    });
    HomeScreen.FlexHomeContent.animate(kony.ui.createAnimation({
        "100": {
            "top": "30%",
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
        "animationEnd": MOVE_ACTION____e9c2d0fe8c904f40a543a446de9a43c5_Callback
    });
}

function AS_FlexContainer_52fb0f9bb0264ee5b374701eeb9df268(eventobject) {
    return redirectFromProductDetailsScreenToStoreLocatorScreen.call(this);
}

function AS_FlexContainer_5752f2c34d3041679f14e4022f123afb(eventobject) {
    return homeBack.call(this);
}

function AS_FlexContainer_5f1fdb47d63b4974a217ee28f7eec331(eventobject) {
    return redirectToShoppingCartScreen.call(this);
}

function AS_FlexContainer_61d114f8c87c437b85f9bb042a953513(eventobject) {
    return redirectToStoreLocatorScreen.call(this);
}

function AS_FlexContainer_6fbaf4dc89bc470087f75ced0a3afb9f(eventobject) {
    function MOVE_ACTION____3c0bb96552364865bc8bf1a34e4f56cd_Callback() {}

    function MOVE_ACTION____0dd75bbf3953474d808545b15248b5aa_Callback() {}
    HomeScreen.FlexCustomSearchArea.animate(kony.ui.createAnimation({
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
        "duration": 0.3
    }, {
        "animationEnd": MOVE_ACTION____0dd75bbf3953474d808545b15248b5aa_Callback
    });
    HomeScreen.FlexHomeContent.animate(kony.ui.createAnimation({
        "100": {
            "top": "30%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.3
    }, {
        "animationEnd": MOVE_ACTION____3c0bb96552364865bc8bf1a34e4f56cd_Callback
    });
}

function AS_FlexContainer_7138d8ecaa2744a6a57ef5600d5b6a1a(eventobject) {}

function AS_FlexContainer_774ea036abd245a9a9fb32b66f30b0f5(eventobject) {
    return redirectFromProductListScreenToHomeScreen.call(this);
}

function AS_FlexContainer_7fac7b91528f488aabb287747e2b1364(eventobject) {
    return redirectToShoppingCartScreen.call(this);
}

function AS_FlexContainer_83fc89949c0841d698adfb6ba5f8d3e6(eventobject) {}

function AS_FlexContainer_87cb08de5bcd4a15bcde4d3473198f00(eventobject) {
    return openHamburgerMenuHomeScreen.call(this);
}

function AS_FlexContainer_8f4e10ecc85e4291901d063d3d65ecc7(eventobject) {
    return redirectFromShoppingCartScreenToShoppingCartScreen.call(this);
}

function AS_FlexContainer_950710bea56f4a9ba424d94c619adba1(eventobject) {
    closeHamburgerMenuProductDetailsImageScreen.call(this);
}

function AS_FlexContainer_9b630ee48ce24efcadf94d4e5ba3902c(eventobject) {
    return redirectFromProductListScreenToStoreLocatorScreen.call(this);
}

function AS_FlexContainer_9d2467dfa6b547589c9993789c139f29(eventobject) {
    return redirectToStoreLocatorScreen.call(this);
}

function AS_FlexContainer_a8c8287ed390463cbd33a30c0ee00b16(eventobject) {
    return redirectToHomeScreen.call(this);
}

function AS_FlexContainer_ae9d30878d1443d5bcf198203b7dd977(eventobject) {
    return openHamburgerMenuProductDetailsImageScreen.call(this);
}

function AS_FlexContainer_b42101475e954c7092c5ad5b59ebc3e9(eventobject) {
    AS_FlexContainer_0eb82c02d1ae4205a94829df367d6b8f(eventobject);
}

function AS_FlexContainer_b615109557644422bdb196f2a77cfa56(eventobject) {
    closeHamburgerMenuProductDetailsScreen.call(this);
}

function AS_FlexContainer_b8727b91b3a54f298aa09b653666b556(eventobject) {
    return redirectFromProductDetailImagesScreenToStoreLocatorScreen.call(this);
}

function AS_FlexContainer_b9f01180639d40eba8cc698cf3a82383(eventobject) {
    closeHamburgerMenuShoppingCartScreen.call(this);
}

function AS_FlexContainer_bf1db99765e64a82a58d3c37efdc38b6(eventobject) {
    return redirectToShoppingCartScreen.call(this);
}

function AS_FlexContainer_c23c39785d224fe3b7b5334c27674acb(eventobject, context) {
    return deleteItemsfromcart.call(this);
}

function AS_FlexContainer_c54058351b754e07b4de979a23560099(eventobject) {
    return SearchButton.call(this);
}

function AS_FlexContainer_c7a8e002a7254b129914e3fe05304cfb(eventobject) {
    return onProductDetailsBack.call(this);
}

function AS_FlexContainer_c90455d5e37747ee9e02ccfaec07a88b(eventobject) {
    return redirectFromProductDetailImagesScreenToHomeScreen.call(this);
}

function AS_FlexContainer_cba1aa116801441c9a4f1ea944dc9eaa(eventobject) {
    return backToProductDetailsScreen.call(this);
}

function AS_FlexContainer_d10006385d5b4e74b53b8f0c0e5ddc71(eventobject) {
    return redirectFromShoppingCartScreenToStoreLocatorScreen.call(this);
}

function AS_FlexContainer_e1ee9994eeb94fa384cce596cd432614(eventobject) {
    return redirectToHomeScreen.call(this);
}

function AS_FlexContainer_ea7c812896ff4e7bba5ee19c680712bb(eventobject) {
    return redirectFromHomeScreenToShoppingCartScreen.call(this);
}

function AS_FlexContainer_f10776cb91c94fe68d9a28a0ce7136cc(eventobject) {
    return redirectFromProductDetailImagesScreenToShoppingCartScreen.call(this);
}

function AS_FlexContainer_f2836c9dfa694296a4b67b2a3c0f3755(eventobject) {
    AS_FlexContainer_0eb82c02d1ae4205a94829df367d6b8f(eventobject);
}

function AS_FlexContainer_f83ee18808f149bc877094f825062a85(eventobject) {
    return reviewsMoveDown.call(this);
}

function AS_FlexContainer_fec5151f24c748c987379f242f2073aa(eventobject) {
    return redirectFromShoppingCartScreenToHomeScreen.call(this);
}

function AS_FlexScrollContainer_baf37bcb41804751b5ba0e7f4a937cb2(eventobject) {
    homeInit.call(this);
}

function AS_Form_2fcf873769d14ede97e2e38c0775a371(eventobject) {
    return ProductDetailsinit.call(this);
}

function AS_Form_369f910cd3cd49aab0aeec958275b094(eventobject) {
    getCategeoryData.call(this);
    Mapinit.call(this);
}

function AS_Form_434886ef9d8c430a8345c970c539578d(eventobject) {
    return ProductListAnimation.call(this);
}

function AS_Form_4bc1364a8b7a47d8a06855f54b098215(eventobject) {
    getCategeoryData.call(this);
    homeInit.call(this);
}

function AS_Form_4dbd9db6aefc4622a59302394727ad18(eventobject) {
    return HomeAnimation.call(this);
}

function AS_Form_79e7974b08db424682548737d12b15ef(eventobject) {
    return Cartinit.call(this);
}

function AS_Form_92d3b1275cb549678ce1723909c1bae8(eventobject) {
    init.call(this);
    TimeOut.call(this);
}

function AS_Form_978585f3aa5a421d92221cfed6d8785c(eventobject) {
    return ProdcutDetailsImage.call(this);
}

function AS_Form_fdb35df281144cb08e1f26da2f92a89f(eventobject) {
    return ProductListInit.call(this);
}

function AS_Image_3f1f2ab32ec14909aae231f0625112e2(eventobject, x, y) {
    return deleteItemsfromcart.call(this);
}

function AS_Image_7ea790b9dd914b77a4fb641827068ce0(eventobject, imagesrc, issuccess) {}

function AS_Image_ab604e24b2954d21a618643a76299bf3(eventobject, imagesrc, issuccess) {}

function AS_Image_f3f303ce4c10444495a94e26d64302e7(eventobject, x, y) {
    return deleteItemsfromcart.call(this);
}

function AS_RichText_54303e7293d74705b3ae4ad7a2846bbc(eventobject, x, y) {
    return getMoreImages.call(this);
}

function AS_Segment_04c66f8593084e219e445fe62caf7f5f(eventobject, sectionNumber, rowNumber) {
    return ProductListRowClick.call(this);
}

function AS_Segment_34c938d4e8074f7c816661cc796ec724(eventobject, sectionNumber, rowNumber) {
    return HomeCatClick.call(this);
}

function AS_Segment_45e6483d213d4afaae0675338f6e5a35(eventobject) {
    unregisterForIdleTimeout.call(this);
    TimeOut.call(this);
}

function AS_Segment_52044a6e4eb74b398f61620809d94f13(eventobject, sectionNumber, rowNumber) {
    return HomeCatClick.call(this);
}

function AS_Segment_60c43ce7061343439f2e6350e33716e5(eventobject) {
    unregisterForIdleTimeout.call(this);
    TimeOut.call(this);
}

function AS_Segment_f87c0533979f420387b28caaefb13e65(eventobject, sectionNumber, rowNumber) {
    return HomeCatClick.call(this);
}

function AS_TextField_614166f2044e46ad8af9f7232daae4f4(eventobject, changedtext) {
    return OndoneCustomsearch.call(this);
}