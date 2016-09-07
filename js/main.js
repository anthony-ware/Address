const app= angular.module('addressBook',[]);
      app.controller('addressBookCtrl', function($scope) {
        $scope.contacts = [
        {'name': 'Anthony Ware',
         'number': '508-404-3142',
         'details': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis nisi quis mi tincidunt luctus ut quis nunc. Nam non risus tincidunt risus sodales condimentum. Morbi sed gravida elit. Nunc a turpis vestibulum elit.',
         'location':'Boston'}];

         $scope.addContact = function(contact){
          $scope.contacts.push(angular.copy(contact));
          delete contact.name && delete contact.number;
          delete contact.location;

          
         };

         // $scope.expand = function(moreInfo){
          
         // };


      });

     
      // When the user clicks on the entry, more data is shown.
       // Create a module for the city and state that the person live in. 
       //possibly show a picture of the person.
