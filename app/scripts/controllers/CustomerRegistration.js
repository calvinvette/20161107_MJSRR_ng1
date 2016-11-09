angular.module('yoDemoApp')
  .controller('CustomerRegistrationController', function($scope, CustomerService) {

    $scope.customer = {
      customerId : -1,
      firstName : '',
      lastName : '',
      phoneNumber : '',
      birthDate : new Date()
    };

    $scope.register = function() {
      $scope.customers.push($scope.customer);
      console.log($scope.customer);
    };

    $scope.customers = [];
    CustomerService.async().then(
      function() {
        console.log("Got promise resolution!")
        console.dir(CustomerService.customers);
        $scope.customers = CustomerService.customers;
      }, function() {
        console.log("Promise returned error");
      }
    )
/*
Migrated to CustomerService

    $scope.customers = [];
    $http.get("http://nextgened.com/weasley/customers.json").then(
      function(response) {
        $scope.customers = response.data;
        console.log($scope.customers);
      },
      function(errorResponse) {
        console.log("error getting customers!" + errorResponse);
      }
    );
*/
  });
