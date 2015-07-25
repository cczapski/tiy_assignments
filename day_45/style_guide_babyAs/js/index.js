//NAVIGATION ITEMS
$('ul').hide();
$('#link-goals').show();
$('#link-type').hide();
$('#link-colors').hide();
$('#link-grid').hide();
$('#link-nav').hide();
$('#link-elements').hide();
$('#link-images').hide();
$('#link-logo_icons').hide();

//CONTENT ITEMS
$('.content-goals').show();
$('.content-type').hide();
$('.content-colors').hide();
$('.content-grid').hide();
$('.content-nav').hide();
$('.content-elements').hide();
$('.content-images').hide();
$('.content-logo_icons').hide();

//ARROW ACTION
$('.arrow').click(function() {
  $('ul').slideToggle();
  $('h3').css('padding-bottom', '1em');
});

$('#li-goals').click(function () {
  $('ul').hide();
  $('h3').css('padding-bottom', '0');
  //titles
  $('#link-goals').show();
  $('#link-type').hide();
  $('#link-colors').hide();
  $('#link-grid').hide();
  $('#link-nav').hide();
  $('#link-elements').hide();
  $('#link-images').hide();
  $('#link-logo_icons').hide();
  //content
  $('.content-goals').show();
  $('.content-type').hide();
  $('.content-colors').hide();
  $('.content-grid').hide();
  $('.content-nav').hide();
  $('.content-elements').hide();
  $('.content-images').hide();
  $('.content-logo_icons').hide();
});

$('#li-type').click(function () {
  $('ul').hide();
  $('h3').css('padding-bottom', '0');
  //titles
  $('#link-goals').hide();
  $('#link-type').show();
  $('#link-colors').hide();
  $('#link-grid').hide();
  $('#link-nav').hide();
  $('#link-elements').hide();
  $('#link-images').hide();
  $('#link-logo_icons').hide();
  //content
  $('.content-goals').hide();
  $('.content-type').show();
  $('.content-colors').hide();
  $('.content-grid').hide();
  $('.content-nav').hide();
  $('.content-elements').hide();
  $('.content-images').hide();
  $('.content-logo_icons').hide();
});

$('#li-colors').click(function () {
  $('ul').hide();
  $('h3').css('padding-bottom', '0');
  //titles
  $('#link-goals').hide();
  $('#link-type').hide();
  $('#link-colors').show();
  $('#link-grid').hide();
  $('#link-nav').hide();
  $('#link-elements').hide();
  $('#link-images').hide();
  $('#link-logo_icons').hide();
  //content
  $('.content-goals').hide();
  $('.content-type').hide();
  $('.content-colors').show();
  $('.content-grid').hide();
  $('.content-nav').hide();
  $('.content-elements').hide();
  $('.content-images').hide();
  $('.content-logo_icons').hide();
});

$('#li-grid').click(function () {
  $('ul').hide();
  $('h3').css('padding-bottom', '0');
  //titles
  $('#link-goals').hide();
  $('#link-type').hide();
  $('#link-colors').hide();
  $('#link-grid').show();
  $('#link-nav').hide();
  $('#link-elements').hide();
  $('#link-images').hide();
  $('#link-logo_icons').hide();
  //content
  $('.content-goals').hide();
  $('.content-type').hide();
  $('.content-colors').hide();
  $('.content-grid').show();
  $('.content-nav').hide();
  $('.content-elements').hide();
  $('.content-images').hide();
  $('.content-logo_icons').hide();
});

$('#li-nav').click(function () {
  $('ul').hide();
  $('h3').css('padding-bottom', '0');
  //titles
  $('#link-goals').hide();
  $('#link-type').hide();
  $('#link-colors').hide();
  $('#link-grid').hide();
  $('#link-nav').show();
  $('#link-elements').hide();
  $('#link-images').hide();
  $('#link-logo_icons').hide();
  //content
  $('.content-goals').hide();
  $('.content-type').hide();
  $('.content-colors').hide();
  $('.content-grid').hide();
  $('.content-nav').show();
  $('.content-elements').hide();
  $('.content-images').hide();
  $('.content-logo_icons').hide();
});

$('#li-elements').click(function () {
  $('ul').hide();
  $('h3').css('padding-bottom', '0');
  //titles
  $('#link-goals').hide();
  $('#link-type').hide();
  $('#link-colors').hide();
  $('#link-grid').hide();
  $('#link-nav').hide();
  $('#link-elements').show();
  $('#link-images').hide();
  $('#link-logo_icons').hide();
  //content
  $('.content-goals').hide();
  $('.content-type').hide();
  $('.content-colors').hide();
  $('.content-grid').hide();
  $('.content-nav').hide();
  $('.content-elements').show();
  $('.content-images').hide();
  $('.content-logo_icons').hide();
});

$('#li-images').click(function () {
  $('ul').hide();
  $('h3').css('padding-bottom', '0');
  //titles
  $('#link-goals').hide();
  $('#link-type').hide();
  $('#link-colors').hide();
  $('#link-grid').hide();
  $('#link-nav').hide();
  $('#link-elements').hide();
  $('#link-images').show();
  $('#link-logo_icons').hide();
  //content
  $('.content-goals').hide();
  $('.content-type').hide();
  $('.content-colors').hide();
  $('.content-grid').hide();
  $('.content-nav').hide();
  $('.content-elements').hide();
  $('.content-images').show();
  $('.content-logo_icons').hide();
});

$('#li-logo_icons').click(function () {
  $('ul').hide();
  $('h3').css('padding-bottom', '0');
  //titles
  $('#link-goals').hide();
  $('#link-type').hide();
  $('#link-colors').hide();
  $('#link-grid').hide();
  $('#link-nav').hide();
  $('#link-elements').hide();
  $('#link-images').hide();
  $('#link-logo_icons').show();
  //content
  $('.content-goals').hide();
  $('.content-type').hide();
  $('.content-colors').hide();
  $('.content-grid').hide();
  $('.content-nav').hide();
  $('.content-elements').hide();
  $('.content-images').hide();
  $('.content-logo_icons').show();
});