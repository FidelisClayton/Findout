angular.module("findOut").controller("MapaCtrl", function($scope){
	$scope.pagina = "Mapa";

	var noPoi = [{
        featureType: "poi",
        stylers: [{ visibility: "off" }]
  	}];

  	var mapOptions = {
        center: new google.maps.LatLng(-5.9181595,-35.2634283),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROAD,
        disableDefaultUI: true,
        styles: noPoi
  	};

	var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
  	map.setCenter(new google.maps.LatLng(-5.9386949,-35.2666731));
})