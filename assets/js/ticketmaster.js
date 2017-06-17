'use strict';

var TicketMaster = (function() {
  let apiKey = '8XlOGLUKhcwBVxoH5g39eY2mBvyz8iAm';

  // Build URL
  function buildUrl(rootUrl, params) {
    for (var n in params) {
      if (params.hasOwnProperty(n)) {
        if (typeof params[n] === 'string') {
          params[n] = params[n].replace(/ /g, '+');
        }
        rootUrl += `&${n}=${params[n]}`;
      }
    }

    rootUrl += `&apikey=${apiKey}`;
    return rootUrl;
  }

  // Event search
  function eventSearch(params) {
    return new Promise((resolve, reject) => {
      let rootUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?';
      let url = buildUrl(rootUrl, params);
      console.log(url);
      $.ajax({
        type: 'GET',
        url: url,
        async: true,
        dataType: 'json',
        success: function(json) {
          resolve(json);
        },
        error: function(xhr, status, err) {
          reject(err);
        }
      });
    });
  }

  // Attraction search
  function attractionSearch(params) {
    return new Promise((resolve, reject) => {
      let rootUrl = 'https://app.ticketmaster.com/discovery/v2/attractions.json?';
      let url = buildUrl(rootUrl, params);
      $.ajax({
        type: 'GET',
        url: url,
        async: true,
        dataType: 'json',
        success: function(json) {
          resolve(json);
        },
        error: function(xhr, status, err) {
          reject(err);
        }
      });
    });
  }

  // Venue search
  function venueSearch(params) {
    return new Promise((resolve, reject) => {
      let rootUrl = 'https://app.ticketmaster.com/discovery/v2/venues.json?';
      let url = buildUrl(rootUrl, params);
      $.ajax({
        type: 'GET',
        url: url,
        async: true,
        dataType: 'json',
        success: function(json) {
          resolve(json);
        },
        error: function(xhr, status, err) {
          reject(err);
        }
      });
    });
  }

  return {
    eventSearch: eventSearch,
    attractionSearch: attractionSearch,
    venueSearch: venueSearch
  };
})();

/*
Example searches below. Refer to the ticketmaster docs for all of the parameter options
*/

// console.log('Searching for Kings Of Leon events at Philips Arena');
// TicketMaster.eventSearch({
//   id: 'KovZpa2Xke',
//   keyword: 'kings of leon',
//   size: 5
// })
//   .then(function(json) {
//     console.log(json);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// console.log('Searching for artist...');
// TicketMaster.artistSearch({
//   keyword: 'Group love',
//   size: 5
// })
//   .then(function(json) {
//     console.log(json);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

// console.log('Searching for venue..');
// TicketMaster.venueSearch({
//   keyword: 'Philips Arena'
// })
//   .then(function(json) {
//     console.log(json);
//   })
//   .catch(function(err) {
//     console.log(err);
//   });
