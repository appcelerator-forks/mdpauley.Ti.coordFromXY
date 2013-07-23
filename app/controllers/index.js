var coordxy = require('coordFromXY');

coordxy.watchMap($.mapView);

$.mapView.addEventListener('longpress', function(e){
	data = coordxy.getLL(e);
	alert(data);
});

$.index.open();