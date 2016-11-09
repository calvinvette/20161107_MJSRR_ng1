"use strict";

angular.module('yoDemoApp')
.service('CustomerService', function($http, $q) {
  var deferred = $q.defer(); // $q is the promise service

  var async = function() {
    console.log("Calling findAll()");
    if (myService.customers.length == 0) {
      console.log("Downloading customers...");
      $http.get("http://nextgened.com/weasley/customers.json").then(
        function(response) {
          myService.customers = response.data;
          console.log(myService.customers);
          deferred.resolve();
        },
        function(errorResponse) {
          console.log("error getting customers!" + errorResponse);
          deferred.reject();
        });
    } else {
      console.log("Using cached customers...");
    }
    return deferred.promise;
  };

  var myService = {
    async : async,
    customers : []
  };

  return myService;
});
