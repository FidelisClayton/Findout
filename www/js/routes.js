angular.module('findOut').config(function($routeProvider){
  $routeProvider.
    when("/", {
      templateUrl: "/views/mapa.html",
      controller: "MapaCtrl"
    }).
    when("/loja/:id", {
      templateUrl: "/views/loja.html",
      controller: "LojaCtrl"
    }).
    when("/produto/:id", {
      templateUrl: "/views/produto.html",
      controller: "ProdutoCtrl"
    })
    .otherwise("/");
})