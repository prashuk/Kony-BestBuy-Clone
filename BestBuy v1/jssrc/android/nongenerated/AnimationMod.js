//Animation - HomeScreen Segemnt
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
//Animation - ProductListScreen Segment
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