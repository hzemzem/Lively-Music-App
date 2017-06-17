window.EVT = new EventEmitter2();

var App = (function() {
  let $advForm, $advFormToggleLink;

  function init() {
    $advForm = $('#advSearch');
    $advFormToggleLink = $('#advSearchToggle');

    $advFormToggleLink.on('click', toggleAdvSearchForm);
  }

  function toggleAdvSearchForm() {
    $advForm.slideToggle();
  }

  EVT.on('init', init);
})();

$(document).ready(function() {
  EVT.emit('init');
});
