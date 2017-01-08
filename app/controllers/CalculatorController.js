var app=angular.module('myApp');

app.controller('calculatorController', function ($scope, constantsFactory, operatorsFactory) {
    $scope.constants = constantsFactory.constants;
    $scope.operators = operatorsFactory.operators;
    $scope.result = 0;
    $scope.input = '';
    $scope.currentOperation = '';


    $scope.showArea = function(area) {
         $scope.currentArea = area;
    };
    $scope.writeConstant = function(constant) {
        $scope.input+= constant.value;
        $scope.evaluate(constant.value);
    };
    $scope.writeOperation = function(operation) {
        if(operation == 'C'){
            $scope.reset();
            return;
        }
        $scope.input+= operation;
        $scope.currentOperation = operation;
    };
    $scope.evaluate = function(constant) {
        switch ($scope.currentOperation){
            case '':
            case '+':
                $scope.result += constant;
                break;
            case '-':
                $scope.result -= constant;
                break;
            case '*':
                $scope.result *= constant;
                break;
            case '/':
                $scope.result /= constant;
                break;
        }
    };
    $scope.reset = function (){
        $scope.result = 0;
        $scope.input = '';
        $scope.currentOperation = '';
    }

});