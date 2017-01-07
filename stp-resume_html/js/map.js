//Google Map
google.maps.event.addDomListener(window, 'load', init);
var map;
function init() {
    var mapOptions = {
        center: new google.maps.LatLng(22.957890738863462, 89.47894901807705),
        zoom: 3,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: true,
        draggable: true,
        overviewMapControl: true,
        overviewMapControlOptions: {
            opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType": "landscape", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "transit", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "poi", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "water", "elementType": "labels", "stylers": [{"visibility": "off"}]}, {"featureType": "road", "elementType": "labels.icon", "stylers": [{"visibility": "off"}]}, {"stylers": [{"hue": "#00aaff"}, {"saturation": -100}, {"gamma": 2.15}, {"lightness": 12}]}, {"featureType": "road", "elementType": "labels.text.fill", "stylers": [{"visibility": "on"}, {"lightness": 24}]}, {"featureType": "road", "elementType": "geometry", "stylers": [{"lightness": 57}]}],
    }
    var mapElement = document.getElementById('map');
    var map = new google.maps.Map(mapElement, mapOptions);
    var locations = [[
            'ThemesPlugin.com',
            'Free & Premium Bootstrap, Html5, Joomla, Wordpress, Responsive template & plugins provider.',
            '+8801918376720',
            'hithemeplugin@gmail.com',
            'http://www.themesplugin.com',
            22.957890738863462, 89.47894901807705,
            'images/map_marker.png'
        ]];
    for (i = 0; i < locations.length; i++) {
        if (locations[i][1] == 'undefined') {
            description = '';
        } else {
            description = locations[i][1];
        }
        if (locations[i][2] == 'undefined') {
            telephone = '';
        } else {
            telephone = locations[i][2];
        }
        if (locations[i][3] == 'undefined') {
            email = '';
        } else {
            email = locations[i][3];
        }
        if (locations[i][4] == 'undefined') {
            web = '';
        } else {
            web = locations[i][4];
        }
        if (locations[i][7] == 'undefined') {
            markericon = '';
        } else {
            markericon = locations[i][7];
        }
        marker = new google.maps.Marker({
            icon: markericon,
            position: new google.maps.LatLng(locations[i][5], locations[i][6]),
            map: map,
            title: locations[i][0],
            desc: description,
            tel: telephone,
            email: email,
            web: web
        });
        if (web.substring(0, 7) != "http://") {
            link = "http://" + web;
        } else {
            link = web;
        }
        bindInfoWindow(marker, map, locations[i][0], description, telephone, email, web, link);
    }
    function bindInfoWindow(marker, map, title, desc, telephone, email, web, link) {
        var infoWindowVisible = (function () {
            var currentlyVisible = false;
            return function (visible) {
                if (visible !== undefined) {
                    currentlyVisible = visible;
                }
                return currentlyVisible;
            };
        }());
        iw = new google.maps.InfoWindow();
        google.maps.event.addListener(marker, 'click', function () {
            if (infoWindowVisible()) {
                iw.close();
                infoWindowVisible(false);
            } else {
                var html = "<div style='color:#000;background-color:#fff;padding:5px;width:150px;'><h4>" + title + "</h4><p>" + desc + "<p><p>" + telephone + "<p><a href='mailto:" + email + "' >" + email + "<a><a href='" + link + "'' >" + web + "<a></div>";
                iw = new google.maps.InfoWindow({content: html});
                iw.open(map, marker);
                infoWindowVisible(true);
            }
        });
        google.maps.event.addListener(iw, 'closeclick', function () {
            infoWindowVisible(false);
        });
    }
}

