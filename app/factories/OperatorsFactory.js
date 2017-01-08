var app=angular.module('myApp');

app.factory('operatorsFactory', function () {
    return {
        operators: ['+','-','*','/','C']
    }
});