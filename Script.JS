///<reference path="angular.min.js"/>


var myapp = angular.module("MyModule", []);

/*var mycontroller= function ($scope){
$scope.message="My First Angular Project";
}*/

//(Can Create a variable of can also substitute function like below)

myapp.controller("myController", function ($scope) {
    var Techs = [
        { Name: "C#", Likes: 0, Dislikes: 0 },
        { Name: "Java", Likes: 0, Dislikes: 0 },
        { Name: "Python", Likes: 0, Dislikes: 0 },
        { Name: "RubyonRails", Likes: 0, Dislikes: 0 },
        { Name: "Angular", Likes: 0, Dislikes: 0 }
    ];
    $scope.Techs = Techs;
    $scope.AddLikes = function (Techlikes) {
        Techlikes.Likes++;
    }
    $scope.AddDislikes = function (Techlikes) {
        Techlikes.Dislikes++;
    }
});