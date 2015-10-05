angular.module("findOut").controller("MapaCtrl", function($scope, $http){
	$scope.pagina = "Mapa";
  $scope.modal = false;

  $scope.rate = 3;
  $scope.max = 5;

  $scope.modalClass = "inativo";
  var loja = [];

  $http.get("http://localhost:8080/api/lojas")
    .success(function(response){
      loja = response;
      carregarLojas();
    })
    .error(function(response, status){
      console.log(reponse);
      console.log(status);
    })

  $scope.toggleModal = function(valor){
    if($scope.modal == false && valor == true)
      $scope.modal = true;
    if($scope.modal == true && valor == false)
      $scope.modal = false;
  }

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

  var infowindow = new google.maps.InfoWindow();
  var carregarLojas = function(){
    for (var i = 0; i < loja.length; i++){
      var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(loja[i].latitude,loja[i].longitude),
        dados:{
          id: loja[i].id,
          nome: loja[i].nome,
          descricao: loja[i].descricao,
          endereco: loja[i].endereco,
          imagem: loja[i].imagem
        }
      });

      (function(marker, i) {
        google.maps.event.addListener(marker, 'mousedown', function() {
          $scope.modalClass = 'ativo';
          $scope.loja = marker.dados;
          $scope.toggleModal(true);
          map.panTo(marker.position);
          $scope.$apply();
        });
      })(marker, i);
    }
  }
});
