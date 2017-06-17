'use strict';

var Search = (function() {
  var $navbarSearchBtn,
    $navbarSearchSelector,
    $navbarSearchField,
    $advSearchBtn,
    $advSearchArtist,
    $advSearchVenue,
    $advSearchLocation,
    $advSearchStartDate,
    $advSearchEndDate;

  function init() {
    $navbarSearchBtn = $('#navbarSearchBtn');
    $navbarSearchField = $('#navbarSearchText');
    // $navbarSearchSelector = $('#'); // TODO
    // $advSearchBtn = $('#'); // TODO
    // $advSearchArtist = $('#'); // TODO
    // $advSearchVenue = $('#'); // TODO
    // $advSearchLocation = $('#'); // TODO
    // $advSearchStartDate = $('#'); // TODO
    // $advSearchEndDate = $('#'); // TODO

    $navbarSearchBtn.on('click', navbarSearch);
    // $advSearchBtn.on('click', advSearch);
  }

  function navbarSearch(evt) {
    evt.preventDefault();

    if (!$navbarSearchField.val().trim()) {
      return;
    }
    let searchInput = $navbarSearchField.val().trim();
    let searchType = $navbarSearchSelector.val();

    let params = { keyword: searchInput };

    EVT.emit('search', searchType, params);
  }

  function advSearch(evt) {
    evt.preventDefault();

    let artist, venue, location, startDate, endDate;
    artist = $advSearchArtist.val().trim();
    venue = $advSearchVenue.val().trim();
    location = $advSearchLocation.val();
    startDate = $advSearchStartDate.val();
    endDate = $advSearchEndDate.val();
    let searchType = evaluateSearchType([artist, venue, location, startDate, endDate]);
    let params = { keyword: '' };

    if (artist) {
      params.keyword += $advSearchArtist.val().trim();
    }
    if (venue) {
      params.keyword += $advSearchVenue.val().trim();
    }
    if (location) {
      let geopoint = 'Some google maps call here'; // TODO
      params.geoPoint = Geohash.encode(geopoint.lat, geopoint.lon);
    }
    if ($advSearchStartDate.val()) {
      params.startDateTime = $advSearchStartDate.val();
    }
    if ($advSearchEndDate.val()) {
      params.endDateTime = $advSearchEndDate.val();
    }

    EVT.emit('search', searchType, params);
  }

  function evaluateSearchType(searchParams) {
    let [artist, venue, location, startDate, endDate] = searchParams;
    let searchType = null;

    if (artist & !venue & !location & !startDate & !endDate) {
      searchType = 'artist';
    } else if (venue & !artist & !location & !startDate & !endDate) {
      searchType = 'venue';
    } else if (venue & location & !artist & !startDate & !endDate) {
      searchType = 'venue';
    } else {
      searchType = 'event';
    }

    return searchType;
  }

  EVT.on('init', init);
})();
