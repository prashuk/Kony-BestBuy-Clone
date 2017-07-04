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