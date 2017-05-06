angular.module('dataHandler', [])

.controller('dataDisplay', function ($scope, $http) {
  var URL = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&id=4gSOMba1UdM&key=AIzaSyB-a6K5t_nTTWQTihPXYmCGW0pTKPdM4to';

  $scope.data = {};

  function getUserData() {
    $http.get(URL).then(function (response) {
      $scope.data = response.data.items[0].statistics;
      document.getElementsByClassName('positiv')[0].style.width = (parseInt($scope.data.likeCount) / (parseInt($scope.data.likeCount) + parseInt($scope.data.dislikeCount))) * 100 + "%";
      document.getElementsByClassName('negativ')[0].style.width = (parseInt($scope.data.dislikeCount) / (parseInt($scope.data.likeCount) + parseInt($scope.data.dislikeCount))) * 100 + "%";
    });
  }

  getUserData();
  setInterval(getUserData, 1000);
});
