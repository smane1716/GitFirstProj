///<reference path="angular.min.js" />

var myapp = angular.module("MyModule", []);



myapp.controller("myController", function ($scope) {

    var ImpData = [
        { Name: "Prashant", DateofBirth: new Date("November 30, 1987"), Gender: "Male", Salary: 8554.65 },
        { Name: "Grishma", DateofBirth: new Date("October 18, 1991"), Gender: "Female", Salary: 9000.15 },
        { Name: "Sai Krishna", DateofBirth: new Date("December 24, 1986"), Gender: "Male", Salary: 10000.65 },
        { Name: "Neha Mane", DateofBirth: new Date("December 22, 1991"), Gender: "Female", Salary: 7500.65 },
        { Name: "Sesank Mamidipelli", DateofBirth: new Date("August 15, 1989"), Gender: "Male", Salary: 6500.65 },
        { Name: "Naithik Thumukunta", DateofBirth: new Date("June 15, 1990"), Gender: "Male", Salary: 11554.65 },

    ];
    $scope.ImpData = ImpData;
    $scope.Limitrow = 1;
});