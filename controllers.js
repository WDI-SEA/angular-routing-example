angular.module('App')
.controller('CoolCtrl', ['$scope', '$state', function($scope, $state) {
  $scope.name = 'Sean';

  $scope.changeState = function() {
    $state.go('sean', {message: 'Guy'});
  }
}])
.controller('SeanCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.name = 'Bill';
  $scope.message = $stateParams.message;
}]);