//Function calls for the animation for homeScreen segment.
function HomeAnimation() {
    var animConfig = {
        "duration": 0.3,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FORWARDS
    };
    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.scale(0.0, 0.0);
    var transformProp2 = kony.ui.makeAffineTransform();
    transformProp2.scale(0.5, 0.5);
    var transformProp3 = kony.ui.makeAffineTransform();
    transformProp3.scale(1, 1);
    var animDefinitionOne = {
        0: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp1
        },
        50: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp2
        },
        100: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp3
        }
    };
    var animDefinition = kony.ui.createAnimation(animDefinitionOne);
    var finalAnimation = {
        definition: animDefinition,
        config: animConfig
    };
    HomeScreen.SegmentProductList.setAnimations({
        visible: finalAnimation
    });
    kony.print("In row display");
}
//Function calls for the animation for productListScreen segment.
function ProductListAnimation() {
    var animConfig = {
        "duration": 0.3,
        "iterationCount": 1,
        "delay": 0,
        "fillMode": kony.anim.FORWARDS
    };
    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.scale(0.0, 0.0);
    var transformProp2 = kony.ui.makeAffineTransform();
    transformProp2.scale(0.5, 0.5);
    var transformProp3 = kony.ui.makeAffineTransform();
    transformProp3.scale(1, 1);
    var animDefinitionOne = {
        0: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp1
        },
        50: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp2
        },
        100: {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "transform": transformProp3
        }
    };
    var animDefinition = kony.ui.createAnimation(animDefinitionOne);
    var finalAnimation = {
        definition: animDefinition,
        config: animConfig
    };
    ProductListScreen.ProductListSegmentent.setAnimations({
        visible: finalAnimation
    });
    kony.print("In row display");
}
//Function calls for the animation for reviewSegment move up.
function reviewsMoveup() {
    function MOVE_ACTION____OBJECTUP_Callback() {}

    function MOVE_ACTION____OBJECTDOWN_Callback() {}
    ProductDetailsScreen.FlexReview.animate(kony.ui.createAnimation({
        "100": {
            "top": "15%",
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
        "animationEnd": MOVE_ACTION____OBJECTDOWN_Callback
    });
    ProductDetailsScreen.FlexImageUpArrow.animate(kony.ui.createAnimation({
        "100": {
            "top": "0%",
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
        "animationEnd": MOVE_ACTION____OBJECTUP_Callback
    });
    hideUpArrow();
}
//Function calls for the animation for reviewSegment move down.
function reviewsMoveDown() {
    function MOVE_ACTION____OBJECTUP_Callback() {}

    function MOVE_ACTION____OBJECTDOWN_Callback() {}
    ProductDetailsScreen.FlexReview.animate(kony.ui.createAnimation({
        "100": {
            "top": "100%",
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
        "animationEnd": MOVE_ACTION____OBJECTDOWN_Callback
    });
    ProductDetailsScreen.FlexImageUpArrow.animate(kony.ui.createAnimation({
        "100": {
            "top": "85%",
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
        "animationEnd": MOVE_ACTION____OBJECTUP_Callback
    });
    hideDownArrow();
}
//Function calls for the animation for searchArea move left.
function SearchButton() {
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
    }, {});
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
    }, {});
}
//Function calls for the animation for searchArea move right.
function SearchCancelButton() {
    HomeScreen.FlexCustomSearchArea.animate(kony.ui.createAnimation({
        "100": {
            "left": "100%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.35
    }, {});
    HomeScreen.FlexHomeContent.animate(kony.ui.createAnimation({
        "100": {
            "top": "9.5%",
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            }
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.35
    }, {});
}
//Function calls for the animation for totalLblShoppingCart.
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
        "duration": 0.25
    }, {});
}