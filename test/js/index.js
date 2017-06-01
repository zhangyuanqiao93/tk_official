/**
 * Created by TKKJ on 2017/5/31.
 */


window.console.log("Hello");

var headroom = new Headroom(elem, {
    "tolerance": 5,
    "offset": 205,
    "classes": {
        "initial": "animated",
        "pinned": "swingInX",
        "unpinned": "swingOutX"
    }
});
headroom.init();

// to destroy
headroom.destroy();


/**
 * 插件方式实现
 */

$('header').Headroom({
   "tolerance":5,
    "offset":205,
    "classes": {
        "initial": "animated",
        "pinned": "swingInX",
        "unpinned": "swingOutX"
    }
});

$('#header').destroy();
