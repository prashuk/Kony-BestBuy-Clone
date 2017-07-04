//Function calls for show more images on clicking the richText 'More...'.
function getMoreImages() {
    ProductDetailImagesScreen.detailimagessegment.widgetDataMap = {
        ImgProductSeveral: "typeImage"
    };
    ProductDetailImagesScreen.detailimagessegment.setData(arrayMoreImages);
    ProductDetailImagesScreen.show();
}
//Function calls on the clicking the back button on productDetailsImageScreen
function backToProductDetailsScreen() {
    ProductDetailsScreen.show();
}