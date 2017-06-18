'use strict';

var Search = (function() {
  var $navbarSearchBtn,
    $navbarSearchSelector,
    $navbarSearchField,
    $advSearchBtn,
    $advSearchArtist,
    $advSearchVenue,
    $advSearchCity,
    $advSearchState,
    $advSearchZip,
    $advSearchStartDate,
    $advSearchEndDate;

  function init() {
    $navbarSearchBtn = $('#navbarSearchBtn');
    $navbarSearchField = $('#navbarSearchText');
    $navbarSearchSelector = $('#navbarSearchType');
    $advSearchBtn = $('#advSearchBtn');
    $advSearchArtist = $('#advSearchArtist');
    $advSearchVenue = $('#advSearchVenue');
    $advSearchCity = $('#advSearchCity');
    $advSearchState = $('#advSearchState');
    $advSearchZip = $('#advSearchZip');
    $advSearchStartDate = $('#advSearchStartDate');
    $advSearchEndDate = $('#advSearchEndDate');

    $navbarSearchBtn.on('click', navbarSearch);
    $advSearchBtn.on('click', advSearch);
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

    let artist, venue, city, state, zip, location, startDate, endDate;
    artist = $advSearchArtist.val().trim();
    venue = $advSearchVenue.val().trim();
    city = $advSearchCity.val().trim();
    state = $advSearchState.val();
    zip = $advSearchZip.val().trim();
    startDate = $advSearchStartDate.val();
    endDate = $advSearchEndDate.val();
    let searchType = evaluateSearchType([artist, venue, city, state, zip, startDate, endDate]);
    let params = { keyword: '' };

    if (artist) {
      params.keyword += artist;
    }
    if (venue) {
      params.keyword += ' ' + venue;
    }
    if (city) {
      params.city = city;
    }
    if (zip) {
      params.postalCode = zip;
    }
    if (state) {
      params.stateCode = state;
    }
    // saving for if we add a 'use current location' feature
    // if (location) {
    //   let geopoint = 'Some google maps call here'; // TODO
    //   params.geoPoint = Geohash.encode(geopoint.lat, geopoint.lon);
    // }
    if ($advSearchStartDate.val()) {
      params.startDateTime = $advSearchStartDate.val();
    }
    if ($advSearchEndDate.val()) {
      params.endDateTime = $advSearchEndDate.val();
    }

    EVT.emit('search', searchType, params);
  }

  function evaluateSearchType(searchParams) {
    // TODO update with city, state, and zip
    // let [artist, venue, location, startDate, endDate] = searchParams;
    // let searchType = null;

    // if (artist & !venue & !location & !startDate & !endDate) {
    //   searchType = 'artist';
    // } else if (venue & !artist & !location & !startDate & !endDate) {
    //   searchType = 'venue';
    // } else if (venue & location & !artist & !startDate & !endDate) {
    //   searchType = 'venue';
    // } else {
    //   searchType = 'event';
    // }

    // for now, let's limit search to only events
    let searchType = 'event';
    return searchType;
  }

  EVT.on('init', init);
})();
