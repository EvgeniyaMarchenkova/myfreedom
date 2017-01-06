var app=angular.module('myApp');

app.factory('constantFactory', function() {
    var constantFactory = {
        'Math':[['Pi',3.141],['E', 2.718],['sqrt2',1.414]],
        'Phys':[['C',2.997],['G', 9.81],['L',6.022]],
        'Chem':[]

    };
    return constantFactory;
});