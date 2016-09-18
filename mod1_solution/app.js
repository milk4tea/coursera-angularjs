(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.message = "";
    $scope.lunches = "";
    $scope.status = "";
    $scope.check = function() {
      var lunches = $scope.lunches;
      if(lunches) {
        var arrLunches = lunches.split(',');
        arrLunches = arrLunches.filter(function(n) { return n.trim() != "" });
        var num = arrLunches.length;
        switch (num) {
          case 0:
            $scope.message = "Please enter data first";
            $scope.status = 'err';
            break;
          case 1:
          case 2:
          case 3:
             $scope.message = "Enjoy!";
             $scope.status = 'ok';
             break;
          default:
            $scope.message = "Too much!";
            $scope.status = 'ok';
        }
      } else {
        $scope.message = "Please enter data first";
        $scope.status = 'err';
      }
    };
  }


})();
