var app=angular.module('myApp');

app.controller('showConstantsController', function ($scope, constantFactory) {
     $scope.showMathConst = function() {
        $scope.arrConst = constantFactory.Math;
         $scope.arr = constantFactory.Math;
    }
     $scope.showPhysConst = function () {
        $scope.arrConst = constantFactory.Phys;
    }
     $scope.showChemConst = function() {
        $scope.arrConst = constantFactory.Chem;
    }
    $scope.writeConstant = function(y) {
        $scope.input=y[1];
    }
})