'use strict';

var Geolocator = (function() {
  function getLocation() {
    return new Promise(function(resolve, reject) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          resolve([position.coords.latitude, position.coords.longitude]);
        },
        function(error) {
          reject(error);
        }
      );
    });
  }

  return {
    getUserLocation: getLocation
  };
})();
