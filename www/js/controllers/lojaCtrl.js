angular.module("findOut").controller("LojaCtrl", function($scope, $location, $timeout, $routeParams){
	$scope.loja = "Nome da loja";
	$scope.loading = true;
	$scope.selecionado = 0;
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
       
   	$scope.verProduto = function(idProduto){
   		$scope.selecionado = idProduto;
   		$timeout(function(){
   			$location.path('/loja/' + $routeParams.id +'/produto/' + idProduto);
   		}, 600)
   	}

   	$timeout(function(){
   		$scope.loading = false;
   	}, 2500);

   	$scope.backToMap= function(){
   		$location.path('/');
   	}
});