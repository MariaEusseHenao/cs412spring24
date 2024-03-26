//enumeration
var DAYS;
(function (DAYS) {
    DAYS[DAYS["monday"] = 0] = "monday";
    DAYS[DAYS["tuesday"] = 1] = "tuesday";
    DAYS[DAYS["wednesday"] = 2] = "wednesday";
})(DAYS || (DAYS = {}));
var day = DAYS[1];
console.log("".concat(day));
