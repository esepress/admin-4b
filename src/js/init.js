$(function () {
  $('input').typing();
  $('.app-sidebar').sidebar();
  $('.as-input').asInput();
  $('.chat').chat();
  $('.modal-calendar').calendar();
  $('.nav').navIndicator();
  $('[data-toggle="popover"]').popover();
  $('[data-toggle="tooltip"]').tooltip();
  $('[data-toggle="suggestion"]').suggestion();
  $('[data-toggle="file-manager"]').fileManager();
});
