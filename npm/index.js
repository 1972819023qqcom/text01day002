exports.sum = function () {
    var number = 0;
    for (var i = 0; i < arguments.length; i++) {
        number += arguments[i];
    }
    return number;
}