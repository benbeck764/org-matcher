(function() {
  'use strict';

  angular.module('tagSettings')
    .controller('tagSettingsController', ["tagSettingsService", '$http', 'config', Controller]);

  function Controller(tagSettingsService, $http, config) {

    var vm = this;
    vm.tagList = surveySettingsService.data.tags;
    vm.tagInput = "";

    vm.del = function(_id) {
      console.log(_id);

      tagSettingsService.delete(_id, function(data, status, headers, config) {
        console.log(data);
        location.reload();
      });
    };

    vm.add = function(){
      console.log(vm.tagInput);

      if(vm.tagInput != undefined && vm.tagInput.length != 0) {
        surveySettingsService.submit(vm.tagInput, function (data, status, headers, config) {
          console.log(data);
          location.reload();
        });
      }
    };
  }


})();
