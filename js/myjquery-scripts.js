// JavaScript Document

$( "#btn-property" ).click(function() {
  $( "#div-property" ).slideToggle( "slow", function() {
    // Animation complete.
	console.log('toggle clicked');
  });
});