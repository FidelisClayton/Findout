angular.module("findOut").controller("ProdutoCtrl", function($scope, $routeParams, $location, $timeout){
	$scope.pagina = "Produto";
  	$scope.labels = ["5 out.", "12 out.", "15 out.", "18 out."];
  	$scope.series = ['Mudanças'];
  	$scope.id = $routeParams.idProduto;
  	$scope.lojaAnterior = $routeParams.idLoja;

  	$scope.loading = true;

	$timeout(function(){
   		$scope.loading = false;
   	}, 2500);

  	$scope.data = [
	    [65, 59, 80, 81]
  	];

  	$scope.backToStore = function(idLoja){
  		$location.path('/loja/' + idLoja);
  	}

  	$scope.produtos = [
		{	id: 1
			,nome: 'Gps lojão da marca multilaser'
			,preco: '100'
			,descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque, at possimus perferendis soluta eligendi odit amet. Unde quibusdam labore, fuga nulla assumenda repellat, neque reiciendis asperiores iure doloribus rem!'
			,imagem: 'img/gps.jpg'
		},

		{	id: 2
			,nome: 'Camisa Metallica'
			,preco: '49'
			,descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti nobis fugiat facere cupiditate impedit dignissimos eum possimus, ullam pariatur optio aspernatur ratione, ex, temporibus in reiciendis ipsam ab corrupti ut!'
			,imagem: 'img/camisa-metallica.jpg'
		},

		{	id: 3
			,nome: 'Camisa Iron Maiden'
			,preco: '49'
			,descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque, at possimus perferendis soluta eligendi odit amet. Unde quibusdam labore, fuga nulla assumenda repellat, neque reiciendis asperiores iure doloribus rem!'
			,imagem: 'img/camisa-iron-maiden.jpg'
		},

		{	id: 4
			,nome: 'Camisa RHCP'
			,preco: '50'
			,descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque, at possimus perferendis soluta eligendi odit amet. Unde quibusdam labore, fuga nulla assumenda repellat, neque reiciendis asperiores iure doloribus rem!'
			,imagem: 'img/camisa-rhcp.jpg'
		},

		{	id: 5
			,nome: 'Camisa Arctic Monkeys'
			,preco: '80'
			,descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque, at possimus perferendis soluta eligendi odit amet. Unde quibusdam labore, fuga nulla assumenda repellat, neque reiciendis asperiores iure doloribus rem!'
			,imagem: 'img/camisa-arctic.jpg'
		},

		{	id: 6
			,nome: 'Camisa Far From Alaska'
			,preco: '75'
			,descricao: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque, at possimus perferendis soluta eligendi odit amet. Unde quibusdam labore, fuga nulla assumenda repellat, neque reiciendis asperiores iure doloribus rem!'
			,imagem: 'img/camisa-ffa.jpg'
		}
	];

	$scope.selecionarCamisa = function(){
		for (var i = 0; i < $scope.produtos.length; i++) {
			if(i + 1 == $scope.id){
				$scope.produto = $scope.produtos[i];
			}
		};
	}

	$scope.selecionarCamisa();

});