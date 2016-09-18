(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  funciton LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunches = "";
    $scope.check = function() {
      var lunches = $scope.lunches;
      if(lunches) {
        var arrLunches = lunches.split(',');
        var num = arrLunches.length;
        if(num <= 3) $scope.message = "Enjoy!";
        else if(num > 3) $scope.message = "Too much!";
      } else {
        $scope.message = "Please enter data first";
      }
    };
  }


})();
