var sheetfactory = function () {
    var factory = {};

    factory.getScriptSheet = function () {
        console.log(topsheet);
        return topsheet;

    }
    return factory;
};
angular.module('qaApp').factory('sheetFactory', sheetfactory);
var topsheet = [
    {
        "Test Case ID": 1100,
        "Test Step": "Development",
        "Request URL": "http://qascript.atmecs.in",
        "Type (GET/POST)": "GET",
        "Expected Assertion": "status",
        "Expected Value": "ok",
        "Status": "done"
    }
    ,
    {
        "Test Case ID": 1101,
        "Test Step": "Deployment",
        "Request URL": "http://qascript.atmecs.in",
        "Type (GET/POST)": "POST",
        "Expected Assertion": "status",
        "Expected Value": "ok",
        "Status": "done"
    }];
