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