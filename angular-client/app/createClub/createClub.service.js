(function() {
  'use strict';

  angular.module('createClub')
    .factory('createClubService', ['$q', '$http', GetService]);

  function GetService($q, $http) {

    var deferred  = $q.defer();

    var service = this;

    service.data = {
      title: null
    };

    function init() {
      var promises = [];
      promises.push($http.get('http://localhost:3000/createClub'));
      $q.all(promises).then(function(data) {
        service.data.title = data[0].data.title;
        deferred.resolve(service);
      });
    }

    init();
    return deferred.promise;
  }
})();
