angular.module("findOut").controller("MapaCtrl", function($scope, $http, $geolocation){

	$scope.pagina = "Mapa";
  $scope.modal = false;

  $scope.rate = 3;
  $scope.max = 5;

  $scope.modalClass = "inativo";

  var loja = [
    { 
      longitude:-35.2634283,
      latitude:-5.9181595,
      endereco: "R. Edgar Dantas, 147 - Centro, Parnamirim - RN",
      descricao:"Lorem ipsum dolor sit a met 1",
      imagem:"img/ag.png",
      nome:"AG auto peças",
      _id:"56152bcc1fc6f43e18000001"
    },

    {
      longitude: -35.2630961,
      latitude: -5.9179937,
      endereco:"R. Edgar Dantas, 145 - Centro, Parnamirim - RN",
      descricao:"Lorem ipsum dolor sit a met 2",
      imagem:"img/batatinha.jpg",
      nome:"Batatinha auto peÃ§as",
      _id:"56152c381fc6f43e18000002"
    }
  ];

  $geolocation.getCurrentPosition({
    timeout: 60000
  }).then(function(position) {
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));
    var usuario = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      });
  });
  /*
  $http.get("http://localhost:8080/api/lojas")
  .success(function(response){
    loja = response;
    carregarLojas();
  })
  .error(function(response, status){
    console.log(reponse);
    console.log(status);
  })
  */

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

  carregarLojas();
});
