// (function(){
   angular.module("MasterChef")
    .controller("MainController", ['$scope', '$http', function($scope, $http){
			$scope.cat = {
				name: "",
				desc: ""
			};

			$scope.addCategory = function() {
				var command = {
					"name": $scope.cat.name,
					"description": $scope.cat.desc
				};

				$http.post("http://localhost:9000/categories", command).then(function(response){
					console.log(response.status);

				});
			}
		}]);
// }());