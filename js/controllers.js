var venueControllers = angular.module('venueControllers', []);

venueControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.venues = data;
    $scope.venueOrder = 'name';
  });
}]);

venueControllers.controller('DetailsController', ['$scope', '$http','$routeParams', function($scope, $http, $routeParams) {
  $http.get('js/data.json').success(function(data) {
    $scope.venues = data;
    $scope.whichItem = $routeParams.itemId;
  });
}]);
