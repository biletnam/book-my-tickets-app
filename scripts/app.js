var bookingApp = angular.module('myBookingApp');

bookingApp.constant('ApiEndpoint', {
  url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?',
  selected_location_coordinates:'12.971599,77.594563',
  selected_radius:'5000',
  selected_types:'movie_theater',
  key:'AIzaSyB_MWaVyfMisy4elEy-vCjqTQYpbikFw1A'
});

/*
bookingApp.controller('myAppController',function($scope){
  $scope.title='BookMyTicket';
  $scope.select_location = function() {
    $scope.data = {}
    var myPopup = $ionicPopup.show({
      template: '<select ng-model="mySelect" ng-change="showSelectValue(mySelect)"><option>Bangalore</option><option>Lucknow</option></select>',
      title: 'Select city',
      scope: $scope,
      buttons: [
        { text: 'Cancel' },
        {
          text: '<b>Save</b>',
          type: 'button-positive',
          onTap: function(e) {         
            console.log('location saved');
          }
        }
      ]
    });
  }
  
  $scope.showSelectValue = function(mySelect) {
    // get selected location and process ... 
    alert("you have selected "+mySelect);
  }

});



bookingApp.controller('movie_sreeen_selection',function($scope,$http,ApiEndpoint){
    var defaultBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(20.59368,78.96288), // this is country specific altitudes
      new google.maps.LatLng(20.59368,78.96288)
    );
    var autocompleteText = document.getElementById('autocomplete');
    var options = {
      bounds: defaultBounds,
      types: ['(cities)'],
      componentRestrictions: {country: 'in'}
    };
    var autocomplete = new google.maps.places.Autocomplete(autocompleteText,options);
    var selected_location_coordinates_latlong="";
    var latlong = "";
    autocomplete.addListener('place_changed', function() {
         var place = autocomplete.getPlace();
         //console.log("place lat="+ place.geometry.location.lat());
         selected_place_name = place.name;
         $scope.callApi(selected_place_name); 
    });
    $scope.callApi = function(slected_place_name){
        var request = $http({
          method : "post",
          url:"php_files/index.php",
          data: {selected_place_name : selected_place_name},      
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });

        request.success(function(response){
          console.log(response);
          $scope.results= response;
          //alert($scope.theaters);
        });

        request.error(function(response, status, headers, config) {
          $scope.isLoaderOn = false;
          $scope.isError = true;
          alert('Could Not Connect to Server');
        });
    }


    

     function to retrieve theatre list using google api
    $scope.callApi = function(geo_lat,geo_lng){
      var selected_location_coordinates = geo_lat+','+geo_lng;
      var selected_url = ApiEndpoint.url+"&location="+selected_location_coordinates+"&radius="+ApiEndpoint.selected_radius+"&types="+ApiEndpoint.selected_types+"&key="+ApiEndpoint.key+"&callback=JSON_CALLBACK";
        $http({
          url:selected_url,
          method:'get'
        }).success(function(response) {
          console.log(response.results);
          $scope.movie_theaters= response.results;
        }).error(function(data, status, headers, config) {
          $scope.isLoaderOn = false;
          $scope.isError = true;
          console.log('Could Not Connect to Server');
        });
    }
    
    
});
*/