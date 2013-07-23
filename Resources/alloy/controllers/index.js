function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    var __alloyId1 = [];
    $.__views.mapView = Ti.Map.createView({
        animate: true,
        height: Ti.UI.FILL,
        left: 0,
        mapType: Ti.Map.STANDARD_TYPE,
        region: {
            latitudeDelta: .02,
            longitudeDelta: .02
        },
        regionFit: true,
        top: 0,
        userLocation: true,
        width: Ti.UI.FILL,
        annotations: __alloyId1,
        ns: Ti.Map,
        id: "mapView"
    });
    $.__views.index.add($.__views.mapView);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var coordxy = require("coordFromXY");
    coordxy.watchMap($.mapView);
    $.mapView.addEventListener("longpress", function(e) {
        data = coordxy.getLL(e);
        alert(data);
    });
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;