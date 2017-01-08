var app=angular.module('myApp');

app.factory('constantsFactory', function() {
    return {
        constants:{
            Math: {
                $desc: 'Math',
                Pi: {value: 3.141, desc: 'Pi'},
                e: {value: 2.718, desc: 'e'},
                sqrt2: {value: 1.414, desc: '√2'}
            },
            Physical: {
                $desc: 'Physical',
                C: {value: 2.997, desc: 'C'},
                g: {value: 9.81, desc: 'g'},
                h: {value: 6.62, desc: 'Planck (h)'}
            },
            Chemical:{
                $desc: 'Chemical',
                N: {value: 6.023, desc: 'Avogadro (N)'},
                V: {value: 22.4, desc: 'molar V'},
                U: {value: 1.660, desc: 'Unified atomic mass (U)'}
            }
        }
    };
});